import * as React from "react";
interface IProps {
  variant: string;
  orientation?: string;
  size?: string;
}
export /*  */ function ButtonGroup({ variant, orientation, size, children }) {
  const cls = `pragmate-button-group ${variant}`;

  return <div className={cls}>{children}</div>;
}
