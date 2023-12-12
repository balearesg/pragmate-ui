import React from 'react';
import { IContext, IProps } from './interfaces';
import { ImageContext } from './context';
import { Error } from './error';
import { Img } from './img';
import { Sources } from './sources';
import { useLoading } from './hooks/use-loading';

export /*bundle*/
	function Image(props: IProps): JSX.Element {
	const { className, onClick, children, sizeLoadingError } = props;
	const [state, setState] = useLoading(props);
	const { error, loaded, htmlLoaded } = state;
	let cls: string = `pui-image ${className ? ` ${className}` : ''}`;
	if (!loaded && !htmlLoaded) cls += ' pui-image-preload';
	if (error) cls += ' pui-image-error';
	const Content = error ? Error : Img;
	const properties: IProps = { ...props, className: cls, onClick };
	['src', 'alt', 'onError', 'children', 'size', 'loading', 'error', 'sources'].forEach(
		(prop) => delete properties[prop]
	);
	const value: IContext = {
		...props,
		state,
		setState,
	};
	const styles: React.CSSProperties = {};
	if (
		(!loaded || !htmlLoaded || error) &&
		!!sizeLoadingError &&
		typeof sizeLoadingError === 'object' &&
		sizeLoadingError.height &&
		sizeLoadingError.width
	) {
		styles.height = sizeLoadingError.height;
		styles.width = sizeLoadingError.width;
	}
	return (
		<ImageContext.Provider value={value}>
			<picture {...properties} style={styles}>
				<Sources />
				<Content />
				{children}
			</picture>
		</ImageContext.Provider>
	);
}
