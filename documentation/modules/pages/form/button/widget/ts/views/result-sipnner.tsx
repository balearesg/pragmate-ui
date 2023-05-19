import React from "react";
import { Button } from "@bgroup/ui/form";

export function ResultsSpinner() {
  function handleChange(event) {
    event.stopPropagation();
    // logic...
  }
  return (
    <Button
      className="btn btn-primary spinner"
      loading={true}
      colorSpinner="#fff"
      onClick={handleChange}
    >
      Beyond Button with spinner
    </Button>
  );
}
