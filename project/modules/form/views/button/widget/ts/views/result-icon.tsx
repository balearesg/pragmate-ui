import React from "react";
import { Button } from "@bgroup/ui/form";

export function ResultIcon() {
  function handleChange(event) {
    event.stopPropagation();
    // logic...
  }
  return (
    <Button className="btn btn-primary" icon="delete" onClick={handleChange}>
      Button with icon
    </Button>
  );
}
