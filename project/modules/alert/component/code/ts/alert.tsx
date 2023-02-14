import React from "react";
import { BeyondIconButton } from '@bgroup/ui/icons';

type props = {
    show?: boolean;
    className?: string;
    mode?: string;
    message?: string;
    title?: string;
    isClose?: boolean;
};

export /*bundle*/
    function BeyondAlert(props: props) {
    const { message, show, className, mode, title, isClose } = props;
    const [state, setState] = React.useState({
        show: show ?? false,
        text: message ?? "texto de la alerta",
    });
    React.useEffect(() => {
        setState({ ...state, show: show });
    }, [show]);
    if (!state.show) return null;
    const close = (): void => setState({ ...state, show: false, text: "" });
    const cls: string = className
        ? `${className} alert ${mode ?? "success"}`
        : `alert ${mode ?? "success"}`;
    return (
        <div className={cls} onClick={close}>
            {" "}
            {title && <span dangerouslySetInnerHTML={{ __html: title }} />}
            {message && <span dangerouslySetInnerHTML={{ __html: message }}></span>}
            {isClose && <BeyondIconButton icon="close" onClick={close} />}
        </div>
    );
}
