import React from "react";
import { Icon, IconButton } from "pragmate-ui/icons";

type props = {
  show?: boolean;
  className?: string;
  mode?: string;
  message?: string;
  title?: string;
  isClose?: boolean;
};

type iconMap = {
  [key: string]: string;
};

export /*bundle*/
function Alert(props: props) {
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

  const icons: iconMap = {
    error: "error",
    warning: "circle-exclamation",
    success: "circle-check",
    info: "info",
  };

  const defaulIcon = icons[mode ?? "success"];

  return (
    <div className={cls} onClick={close}>
      {" "}
      {title && (
        <div className="alert__title">
          <Icon icon={defaulIcon} />{" "}
          <span
            className="alert__title-span"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      )}
      {message && <span dangerouslySetInnerHTML={{ __html: message }}></span>}
      {isClose && <IconButton icon="close" onClick={close} />}
    </div>
  );
}
