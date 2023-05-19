import React from "react";
import { Icon } from "@bgroup/ui/icons";
import { toast } from "@bgroup/ui/toast";

export function Item(props): JSX.Element {
  const { icon } = props;
  function copy() {
    navigator.clipboard.writeText(icon);
    toast.success("Name copied");
  }
  return (
    <button onClick={copy} className={`content-icon ${icon}`}>
      <Icon icon={icon} />
      <span>{icon}</span>
    </button>
  );
}
