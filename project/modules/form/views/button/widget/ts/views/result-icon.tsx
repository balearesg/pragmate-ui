import React from "react";
import { BeyondButton } from "@bgroup/ui/form";

export function ResultIcon() {
  function handleChange(event) {
    event.stopPropagation();
    // logic...
  }
  return (
    <BeyondButton
      className="btn btn-primary"
      icon="delete"
      onClick={handleChange}
    >
      Button with icon
    </BeyondButton>
  );
}
