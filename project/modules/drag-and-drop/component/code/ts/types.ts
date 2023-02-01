import { Dispatch, MutableRefObject } from 'react';

export type propsIndex = {
    count?: number;
    formats?: string[];
    onUpload: (files: File[]) => void;
    clean?: boolean;
    userPhoto?: boolean;
    textUserPhoto?: string;
};

type Message = {
    show: boolean,
    text: string | null,
    type: string | null,
}

export interface InitialState {
    dragging: boolean,
    files: File[],
    message: Message,
    img: string
};

export type Payload = {
    case: 'hideMessage' | 'message' | 'files' | 'dragging' | "img",
    files?: File[],
    dragging?: boolean,
    show?: boolean,
    text?: string | null,
    type?: string | null,
    img?: string
};

export interface CValue {
    files: File[],
    message?: Message,
    count?: number,
    formats?: string[],
    showMessage?: (text: string, type: string, timeout: number) => void,
    dispatch?: Dispatch<Payload>,
    onUpload?: (files: File[]) => void,
    state?: InitialState,
    clean?: boolean,
    drop?: MutableRefObject<HTMLDivElement>,
    drag?: MutableRefObject<HTMLDivElement>,
    userPhoto?: boolean;
    textUserPhoto?: string
};