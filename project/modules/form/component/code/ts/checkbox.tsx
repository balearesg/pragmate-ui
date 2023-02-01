import * as React from "react";
import {
  LegacyRef,
  InputHTMLAttributes,
  ChangeEvent,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
  HTMLAttributes
} from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
  className?: HTMLAttributes<HTMLInputElement>["className"];
  label?: string;
};
export /*bundle*/ const BeyondCheckbox: ForwardRefExoticComponent<
  props & RefAttributes<HTMLInputElement>
> = forwardRef(
  (props: props, ref: LegacyRef<HTMLInputElement>): JSX.Element => {
    const { checked, name, disabled, className, onChange, label } = props;
    const [state, setState] = useState({ checked: !!checked });
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setState({ checked: !checked });
      onChange && onChange(event);
    };
    let cls: string = `beyond-checkbox ${className ? className : ""}`;
    cls += disabled ? " disabled" : "";
    const properties = Object.assign({}, props);
    delete properties.className;
    delete properties.checked;
    delete properties.name;
    delete properties.onChange;
    return (
      <>
        <div className={cls}>
          <input
            style={{ display: "none" }}
            ref={ref}
            type="checkbox"
            className="inp-cbx"
            id={name}
            name={name}
            checked={checked ?? state.checked}
            onChange={handleChange}
            {...properties}
          />
          <label className="cbx" htmlFor={name}>
            <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            <span>{label}</span>
          </label>
        </div>
      </>
    );
  }
);
