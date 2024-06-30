import React from "react";
import { IToast, toast } from './model';

const ANIMATION_MARGIN = 300;

export function useToastAnimation(ref: React.RefObject<HTMLDivElement>, duration: number, id: string) {
    React.useEffect(() => {
        if (ref.current) {
            ref.current.classList.add('enter');
        }
        return () => {
            if (ref.current) ref.current.classList.remove('enter');
        };
    }, [ref]);

    React.useEffect(() => {
        const enterTimeout = setTimeout(() => {
            if (ref.current) {
                ref.current.classList.remove('enter');
                ref.current.classList.add('exit');
            }
        }, duration);

        const exitTimeout = setTimeout(() => {
            toast.current = toast.current.filter((item: IToast) => item.id !== id);
        }, duration + ANIMATION_MARGIN);

        return () => {
            clearTimeout(enterTimeout);
            clearTimeout(exitTimeout);
        };
    }, [duration, id, ref]);
}