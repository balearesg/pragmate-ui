import { HTMLAttributes, ReactNode, } from "react";

export type TProps = {
    onScrollY?: any;
    onScrollX?: any;
    className?: HTMLAttributes<HTMLDivElement>["className"];
    children: ReactNode;
  };