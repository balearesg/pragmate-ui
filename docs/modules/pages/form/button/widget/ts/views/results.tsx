import React from "react";
import { Button } from "pragmate-ui/form";

export function Results() {
  function handleChange(event) {
    event.stopPropagation();
    // logic...
  }
  return (
    <Button className="btn btn-primary" onClick={handleChange}>
      Beyond Button
    </Button>
  );
}
