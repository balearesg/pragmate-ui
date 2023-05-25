import * as React from "react";

export interface IValue {
    selected?: any;
    setSelected?: any;
    close?: () => void;
    ready?: boolean;
    texts?: object;
    container?: HTMLElement;
    current: String;
}

const defaultValue: IValue = {}
export const MenuContext = React.createContext(defaultValue);
export const useMenuContext = () => React.useContext(MenuContext);
