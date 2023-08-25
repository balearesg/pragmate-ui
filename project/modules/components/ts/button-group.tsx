import * as React from "react";

interface IProps {
  variant: string;
  size?: "small" | "medium" | "tall";
  orientation?: "row" | "column";
  bordered?: boolean;
  children;
}

export /* bundle */ function ButtonGroup({
  variant = "primary",
  size = "medium",
  orientation = "row",
  bordered = false,
  children,
}: IProps): JSX.Element {
  let cls = `pragmate-button-group`;
  cls += orientation ? ` ${orientation}` : "";
  return <div className={cls}>{children}</div>;
}
