import * as React from "react";
import {
  LegacyRef,
  InputHTMLAttributes,
  ChangeEvent,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
  SyntheticEvent,
  HTMLAttributes,
} from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  onClick?: (e: SyntheticEvent<HTMLDivElement, Event>) => void;
}
export /*bundle*/ const Switch: ForwardRefExoticComponent<
  props & RefAttributes<HTMLInputElement>
> = forwardRef(
  (props: props, ref: LegacyRef<HTMLInputElement>): JSX.Element => {
    const {
      value,
      checked,
      required,
      name,
      disabled,
      className,
      onChange,
      onClick,
    } = props;
    const [state, setState] = useState({ checked: !!checked });
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setState({ checked: !checked });
      onChange && onChange(event);
    };
    const handleClick = (event) => {
      onClick && onClick(event);
    };
    let cls: string = `beyond-element-switch ${className ? className : ""}`;
    cls += disabled ? " disabled" : "";
    const properties = Object.assign({}, props);

    [
      "className",
      "disabled",
      "checked",
      "name",
      "required",
      "onChange",
      "onClick",
      "value",
    ].forEach((prop) => {
      delete properties[prop];
    });

    return (
      <div className={cls} onClick={handleClick} {...properties}>
        <label className="switch">
          <input
            ref={ref}
            type="checkbox"
            required={required}
            name={name}
            value={value}
            checked={checked ?? state.checked}
            disabled={disabled}
            onChange={handleChange}
            placeholder={name}
          />
          <span className="slider" />
        </label>
      </div>
    );
  }
);
