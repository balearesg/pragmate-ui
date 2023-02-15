import * as React from "react";
import { routing } from "@beyond-js/kernel/routing";

export /*bundle*/
function Link(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
): JSX.Element {
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    routing.pushState(props.href);
  };
  const properties = {...props};
  delete properties.href;
  delete properties.onClick;
  return (
    <a onClick={onClick} {...properties}>
      {props.children}
    </a>
  );
}

export /*bundle*/
function Elink(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement>
): JSX.Element {
  const { href } = props;
  delete props.href;
  return (
    <a href={href} target="_blank" {...props} data-algo="algo">
      {props.children}
    </a>
  );
}
