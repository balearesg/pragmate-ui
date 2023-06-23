import * as React from "react";
import { Slide } from "./slide";
export function SlideItems(props) {
  const slides: Array<JSX.Element> = props.children.map(
    (slide: JSX.Element, index: number) => <Slide key={index}>{slide}</Slide>
  );
  return <>{slides}</>;
}
