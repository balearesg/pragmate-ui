import * as React from "react";
import type { IProps } from "./type";
export /* bundle */ function ButtonGroup(props: IProps): JSX.Element {
  const {
    variant = "primary",
    size = "medium",
    orientation = "row",
    children,
  } = props;

  let cls = `pragmate-button-group`;
  cls += orientation ? ` pragmate-button-group ${orientation}` : "";
  cls += size ? `${cls} ${size}` : "";

  return (
    <div className="content-group">
      <div className={cls}>{children}</div>
    </div>
  );
}
