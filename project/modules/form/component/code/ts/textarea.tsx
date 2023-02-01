import * as React from "react";
import {
  TextareaHTMLAttributes,
  ChangeEvent,
  ReactNode,
  HTMLAttributes,
  useRef,
  useState,
} from "react";

interface props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: any;
  errorMessage?: string;
  max?: string;
  lengthMessage?: string;
  hasError?: boolean;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  label?: any;
  children?: ReactNode;
};
export /*bundle*/ function BeyondTextarea(props: props): JSX.Element {
  const input = props.ref ?? useRef();

  type state = {
    value?: string | number | readonly string[];
    errorMessage: string;
    lengthMessage: string;
    emptyMessage: string;
    _hasError?: boolean;
  };

  const [state, setState] = useState<state>({
    value: props.value ?? "",
    errorMessage: props.errorMessage
      ? props.errorMessage
      : "Formato incorrecto",
    lengthMessage: "Cantidad máxima: ",
    emptyMessage: "Este campo es requerido",
  });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    if (!!props.onChange && typeof props.onChange === "function")
      props.onChange(event);
    setState({
      ...state,
      _hasError: false,
      value: event.target.value,
    });
  };

  const getError: Function = (
    hasError: boolean
  ): JSX.IntrinsicElements["span"] => {
    if (!state._hasError && !hasError) return;

    let errorMessage: string = state.emptyMessage;

    if (hasError || input.value !== "")
      errorMessage = props.errorMessage
        ? props.errorMessage
        : state.errorMessage;

    if (props.max && parseFloat(input.value) > parseInt(props.max)) {
      errorMessage = props.lengthMessage
        ? props.lengthMessage
        : state.lengthMessage + ` (max ${props.max})`;
    }

    return <span className="beyond-element-input-error">{errorMessage}</span>;
  };

  const error: JSX.IntrinsicElements["span"] = getError(props.hasError);
  let properties: props = { ...props };
  let cls: string = props.className
    ? `${props.className} beyond-element-textarea`
    : "beyond-element-textarea";
  cls += props.disabled ? " disabled" : "";
  cls += props.hasError ? " error" : "";

  delete properties.className;
  delete properties.hasError;
  delete properties.errorMessage;
  delete properties.children;
  delete properties.label;

  return (
    <div className={cls}>
      <>
        <textarea
          ref={input}
          {...properties}
          name={props.name}
          onChange={handleChange}
          value={typeof props.value !== "undefined" ? props.value : state.value}
          placeholder={props.placeholder ?? " "}
        />
        {props.children}
        {error}
        {props.label && <label htmlFor={props.id}>{props.label}</label>}
        {props.required && (
          <span className="beyond-input__required-label">(*)</span>
        )}
      </>
    </div>
  );
}
