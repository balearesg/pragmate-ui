import * as React from 'react';
import { PropsWithChildren } from "react";

type props = {
    index?: string;
    isActive?: boolean;
    selected?: string;
    className?: string;
    onTab?: any;
    nolink?: any
};
export /*bundle*/ const BeyondTab = (props: PropsWithChildren<props>) => {
    const { index, isActive, selected, className, children } = props;
    let cls =
        isActive && parseInt(index) === parseInt(selected)
            ? "beyond-tab tab-active"
            : "beyond-tab";
    if (className) cls += ` ${className}`;
    const attrs = { ...props };

    delete attrs.children;
    delete attrs.onTab;
    delete attrs.isActive;
    delete attrs.nolink;
    delete attrs.className;

    return (
        <div className={cls} {...attrs}>
            {children}
        </div>
    );
};
