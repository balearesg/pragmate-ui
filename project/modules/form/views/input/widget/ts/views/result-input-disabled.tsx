import * as React from "react";
import { BeyondInput } from "@bgroup/ui/form";

export function ResultInputDisabled(): JSX.Element {
  const [value, setValue] = React.useState("");

  function handleChange(event) {
    const { value: inputValue } = event.target;
    setValue(inputValue);
  };

  function handleSubmit(event) {
    event.preventDefault();
    // logic...
  };

  return (
    <form onSubmit={handleSubmit}>
      <BeyondInput
        type="text"
        name="name-disabled"
        label="Insert a text..."
        onChange={handleChange}
        value={value}
        disabled
      />
    </form>
  );
}
