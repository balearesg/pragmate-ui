import React, {
  ForwardRefExoticComponent,
  forwardRef,
  LegacyRef,
  RefAttributes,
} from "react";
type properties = {
  color?: string;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  size?: string;
};
export /*bundle*/
  const BeyondSpinner: ForwardRefExoticComponent<
    properties & RefAttributes<unknown>
  > = forwardRef(
    (props: properties, ref: LegacyRef<HTMLDivElement>): JSX.Element => {
      const { color, className, primary, secondary, size } = props;
      let stroke: string;
      if (primary) stroke = "var(--primary)";
      else if (secondary) stroke = "var(--secondary)";
      else if (color) stroke = color;
      else stroke = "var(--primary)";

      const cls: string = className
        ? `${className} beyond-element-spinner`
        : "beyond-element-spinner";
      const style: any = { style: {} };
      if (size) {
        style.style.height = size;
        style.style.width = size
      };
      return (
        <div className={cls} ref={ref} {...style}>
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="20" style={{ stroke }} />
          </svg>
        </div>
      );
    }
  );
