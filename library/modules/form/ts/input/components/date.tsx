import React from "react";
import { Icon } from "pragmate-ui/icons";
import { useInputContext } from "../context";

export function Date(): JSX.Element {
    const { input, props }: any = useInputContext();
    if (props.type !== "date") return null;

    return (
        <Icon
            key="icon"
            icon="calendar"
            className="pui-input__icon"
            onClick={() => input.current.showPicker()}
        />
    );
}
