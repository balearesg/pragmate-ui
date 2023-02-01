import React from "react";
import { BeyondButton } from "@bgroup/ui/form";

export function ResultsSpinner() {
  function handleChange(event) {
    event.stopPropagation();
    // logic...
  }
  return (
    <BeyondButton
      className="btn btn-primary spinner"
      loading={true}
      colorSpinner="#fff"
      onClick={handleChange}
    >
      Beyond Button with spinner
    </BeyondButton>
  );
}
