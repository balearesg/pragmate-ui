import React from 'react';
import { IContext, IProps } from './interfaces';
import { ImageContext } from './context';
import { Error } from './error';
import { Img } from './img';
import { Sources } from './sources';
import { useLoading } from './hooks/use-loading';
import { useLoader } from './hooks/use-loader';

export /*bundle*/
function Image(props: IProps = {}): JSX.Element {
	const { className, onClick, children, sizeLoading } = props;
	const [state, setState] = useLoading(props);
	const { error, loaded, htmlLoaded } = state;
	const { status } = useLoader(props.src);

	let cls: string = `pui-image ${className ? ` ${className}` : ''}`;
	const properties: IProps = { ...props, className: cls, onClick };

	if (!loaded && !htmlLoaded) cls += ' pui-image-preload';
	if (error) cls += ' pui-image-error';

	['src', 'alt', 'onError', 'children', 'size', 'loading', 'error', 'sources', 'sizeLoading'].forEach(
		prop => delete properties[prop],
	);

	const value: IContext = {
		...props,
		state,
		src: props.src,
		status,
		setState,
	};
	const styles: React.CSSProperties = {};
	if (
		(!loaded || !htmlLoaded || error) &&
		!!sizeLoading &&
		typeof sizeLoading === 'object' &&
		sizeLoading.height &&
		sizeLoading.width
	) {
		styles.height = sizeLoading.height;
		styles.width = sizeLoading.width;
	}

	const Content = error ? Error : Img;
	return (
		<ImageContext.Provider value={value}>
			<picture {...properties} style={styles} data-src={props.src}>
				<Sources />
				<Content />
				{children}
			</picture>
		</ImageContext.Provider>
	);
}
