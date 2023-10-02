import React from 'react';
import { IconButton } from 'pragmate-ui/icons';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	graphSrc?: string;
	size?: string;
	children?: React.ReactNode;
	error?: string;
	onError?: (e: React.SyntheticEvent<Element, Event>) => void;
}
/**
 * A React component that loads an image from a URL.
 * @param {props} props - props
 */
interface IInitialState {
	size: string;
	error?: boolean;
	loaded: boolean;
	url?: string;
	onload?: undefined;
	src?: string;
	htmlLoaded?: boolean;
	loading?: string;
	onerror?: undefined;
}
export /*bundle*/
function Image(props: IProps): JSX.Element {
	const initialState: IInitialState = { size: '200x200', loaded: false };
	const { className, onClick, children, src, alt, onError } = props;
	const [image, setImage] = React.useState<HTMLImageElement | IInitialState>();
	const [state, setState] = React.useState<IInitialState>(initialState);
	const onLoad: () => void = (): void => setState({ ...state, error: false, htmlLoaded: true });
	const loadImage = (url: string, size: string): void => {
		let finalSrc: string = url;

		const newImage: HTMLImageElement = new globalThis.Image();
		newImage.onload = (): void => setState({ ...state, loaded: true, error: false });
		newImage.onerror = (): void => setState({ ...state, error: true, loaded: false });
		newImage.src = finalSrc;
		setImage(newImage);
		setState({ ...state, url, size, src: finalSrc, loaded: true });
	};

	React.useEffect(() => {
		const currentSrc: string = src;
		if (state.url !== currentSrc) {
			let size: string = props.size ?? state.size;
			loadImage(currentSrc, size);
		}

		return (): void => setImage({ ...state, onload: undefined, onerror: undefined });
		// eslint-disable-next-line
	}, [src]);

	const { error, loaded, htmlLoaded } = state;
	let output: JSX.Element;
	const onClickError = (event: React.SyntheticEvent<Element, Event>): void => {
		event.stopPropagation();
		if (onError && typeof onError === 'function') onError(event);
	};

	let cls: string = `beyond-element-image ${className ? ` ${className}` : ''}`;
	if (!loaded && !htmlLoaded) cls += ' beyond-element-image-preload';
	if (error) cls += ' beyond-element-image-error';
	const Error: JSX.Element = (
		<div key="error" data-src={src} className="content-error">
			{onError && <IconButton onClick={onClickError} icon="refresh" />}
		</div>
	);
	const Loaded: JSX.Element = (
		<img src={src} onLoad={onLoad} loading={props.loading ?? 'eager'} alt={alt} className={className} />
	);
	output = error ? Error : Loaded;

	const properties: IProps = { ...props, className: cls, onClick };
	['src', 'alt', 'onError', 'children', 'size', 'loading', 'error'].forEach(prop => delete properties[prop]);

	return (
		<figure data-src={src} {...properties}>
			{output}
			{children}
		</figure>
	);
}
