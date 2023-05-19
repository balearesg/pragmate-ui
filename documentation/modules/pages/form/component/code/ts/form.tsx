import React, {
  FormHTMLAttributes,
  FormEvent,
  PropsWithChildren,
} from "react";

type props = FormHTMLAttributes<HTMLFormElement>
export /*bundle*/ function BeyondForm(
  props: PropsWithChildren<props>
): JSX.Element {
  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    props.onSubmit(event);
  };
  const properties: props = Object.assign({}, props);
  delete properties.onSubmit;
  return (
    <form onSubmit={onSubmit} {...properties}>
      {props.children}
    </form>
  );
};
