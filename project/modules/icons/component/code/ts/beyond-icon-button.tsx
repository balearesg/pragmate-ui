import React, {
  MouseEvent,
  ButtonHTMLAttributes,
  SVGAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  PropsWithChildren,
  LegacyRef
} from "react";
import { routing } from "@beyond-js/kernel/routing";
import { BeyondIcon } from "./icon";
interface props extends ButtonHTMLAttributes<HTMLButtonElement>  {
  icon?: string;
  viewBox?: SVGAttributes<SVGSVGElement>["viewBox"];
  id?: string;
  title?: string;
  tippy?: string | object;
  navigate?: string;
  "data-tippy-content"?: string
}
export /*bundle*/
  const BeyondIconButton: ForwardRefExoticComponent<PropsWithChildren<props> & RefAttributes<HTMLButtonElement>> =
    forwardRef((props: PropsWithChildren<props>, ref: LegacyRef<HTMLButtonElement> | undefined): JSX.Element => {
      const { icon, onClick, viewBox, disabled, name, value, id, title, children } =
        props;

      const onClickButton = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
        if (onClick && typeof onClick === "function") {
          onClick(event);
          return;
        }

        if (props.navigate) {
          routing.pushState(props.navigate);
        }
      };

      let { className, type } = props;
      type = !!type ? type : "button";
      className = className
        ? `${className} beyond-icon-button`
        : "beyond-icon-button";

      interface iconAttributes {
        icon: string | undefined;
        viewBox?: string;
      }

      const iconAttributes: iconAttributes = { icon: icon };
      if (viewBox) iconAttributes.viewBox = viewBox;

      const attrs: props = Object.assign({}, props);
      title ? (attrs["data-tippy-content"] = title) : null;

      delete attrs.icon;
      delete attrs.type;
      delete attrs.title;
      delete attrs.viewBox;
      delete attrs.className;

      return (
        <button
          id={id}
          type={type}
          ref={ref}
          {...attrs}
          name={name}
          value={value}
          disabled={disabled}
          className={className}
          onClick={onClickButton}
        >
          <BeyondIcon {...iconAttributes} />
          {children}
          {/* {!disabled && <BeyondWaves/>} */}
        </button>
      );
    });
