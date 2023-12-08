import { TextareaHTMLAttributes, ReactNode } from 'react';
export interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    ref?: any;
    errorMessage?: string;
    max?: string;
    lengthMessage?: string;
    hasError?: boolean;
    label?: any;
    children?: ReactNode;
};

export type TValue = string | number | readonly string[]
export interface ISate {
    value?: TValue;
    errorMessage: string;
    lengthMessage: string;
    emptyMessage: string;
    _hasError?: boolean;
};
