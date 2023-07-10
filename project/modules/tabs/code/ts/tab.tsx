import * as React from "react";
import { PropsWithChildren } from "react";

type props = {
  index?: string;
  isActive?: boolean;
  selected?: string;
  className?: string;
  onTab?: any;
  nolink?: any;
};
export /*bundle*/ const Tab = (props: PropsWithChildren<props>) => {
  const { index, isActive, selected, className, children } = props;
  let cls =
    isActive && parseInt(index) === parseInt(selected)
      ? "pui-tab tab-active"
      : "pui-tab";
  if (className) cls += ` ${className}`;
  const attrs = { ...props };

  ["children", "onTab", "isActive", "nolink", "className"].forEach((prop) => {
    delete attrs[prop];
  });
  return (
    <div className={cls} {...attrs}>
      {children}
    </div>
  );
};
