import * as React from "react";
import { Button } from "pragmate-ui/form";

export function ContentVariants() {
  const buttons = [
    "primary",
    "secondary",
    "tertiary",
    "success",
    "warning",
    "danger",
    "info",
    "link",
  ];

  return (
    <div className="inline__list__container">
      {buttons.map((item) => (
        <Button key={item} variant={item}>
          variant="{item}"
        </Button>
      ))}
    </div>
  );
}
