import React, {
  ImgHTMLAttributes,
  SyntheticEvent,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { BeyondIconButton } from "@bgroup/ui/icons";

interface props extends ImgHTMLAttributes<HTMLImageElement>  {
  graphSrc?: string;
  size?: string;
  children?: ReactNode;
  error?: string;
  onError?: (e: SyntheticEvent<Element, Event>) => void;
};
/**
 * A React component that loads an image from a URL.
 * @param {props} props - props
 */
export /*bundle*/
function BeyondImage(props: props): JSX.Element {
  interface initialState {
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
  const initialState: initialState = { size: "200x200", loaded: false };
  const { className, onClick, children, src, alt, onError } = props;
  const [image, setImage] = useState<HTMLImageElement | initialState>();
  const [state, setState] = useState<initialState>(initialState);
  const onLoad: () => void = (): void =>
    setState({ ...state, error: false, htmlLoaded: true });
  const loadImage = (url: string, size: string): void => {
    let finalSrc: string = url;

    const newImage: HTMLImageElement = new Image();
    newImage.onload = (): void =>
      setState({ ...state, loaded: true, error: false });
    newImage.onerror = (): void =>
      setState({ ...state, error: true, loaded: false });
    newImage.src = finalSrc;
    setImage(newImage);
    setState({ ...state, url: url, size: size, src: finalSrc, loaded: true });
  };
  useEffect(() => {
    const currentSrc: string = src;
    if (state.url !== currentSrc) {
      let size: string = props.size ?? state.size;
      loadImage(currentSrc, size);
    }

    return (): void =>
      setImage({ ...state, onload: undefined, onerror: undefined });
    // eslint-disable-next-line
  }, [src]);

  const { error, loaded, htmlLoaded } = state;
  let output: JSX.Element;
  const onClickError = (event: SyntheticEvent<Element, Event>): void => {
    event.stopPropagation();
    if (onError && typeof onError === "function") onError(event);
  };

  let cls: string = `beyond-element-image ${className ? ` ${className}` : ""}`;
  if (!loaded && !htmlLoaded) cls += " beyond-element-image-preload";
  if (error) cls += " beyond-element-image-error";
  const Error: JSX.Element = (
    <div key="error" data-src={src} className="content-error">
      {onError && <BeyondIconButton onClick={onClickError} icon="refresh" />}
    </div>
  );
  const Loaded: JSX.Element = (
    <img
      src={src}
      onLoad={onLoad}
      loading={props.loading ?? "eager"}
      alt={alt}
    />
  );
  if (error) output = Error;
  if (loaded) output = Loaded;

  const properties: props = { ...props, className: cls, onClick };
  delete properties.src;
  delete properties.alt;
  delete properties.onError;
  delete properties.children;
  delete properties.size;
  delete properties.loading;
  delete properties.error;

  return (
    <figure data-src={src} {...properties}>
      {output}
      {children}
    </figure>
  );
}
