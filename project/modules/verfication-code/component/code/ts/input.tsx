import * as React from "react";
import {
    ChangeEvent,
    KeyboardEvent,
    forwardRef,
    useMemo,
    LegacyRef,
    HTMLAttributes,
    InputHTMLAttributes
} from "react";
type props = {
    className?: HTMLAttributes<HTMLInputElement>["className"];
    value?: InputHTMLAttributes<HTMLInputElement>["value"];
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
};

export default forwardRef(function Input(
    props: props,
    ref: LegacyRef<HTMLInputElement>
): JSX.Element {
    const className: string = useMemo((): string => {
        const propsClassName: string = props.className ?? "";
        const filledClassName: "" | "filled" = Boolean(String(props.value ?? "").length)
            ? "filled"
            : "";
        return `box ${propsClassName} ${filledClassName}`;
    }, [props.value, props.className]);

    return (
        <input
            {...props}
            maxLength={1}
            type="text"
            inputMode="numeric"
            className={className}
            ref={ref}
        />
    );
});
