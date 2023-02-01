import React, {
  useRef,
  MutableRefObject,
  ChangeEvent,
  InputHTMLAttributes,
  HTMLAttributes,
} from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export /*bundle*/ function BeyondRadio(props: props): JSX.Element {
  const input: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>();

  const onClick = (event: ChangeEvent<HTMLInputElement>): void => {
    input.current.checked = true;
    if (!!props.onChange) props.onChange(event);
  };

  const properties: props = { ...props };
  delete properties.onChange;

  const cls: string = `beyond-element-radio ${
    properties.className ? properties.className : ""
  }`;

  return (
    <div className={cls}>
      <input ref={input} {...properties} type="radio" onChange={onClick} />
      {properties.label && (
        <label htmlFor={properties.id}>{properties.label}</label>
      )}
    </div>
  );
};
