import * as React from "react";
import { Input } from "@bgroup/ui/form";

export function ResultInputPassword(): JSX.Element {
  const [value, setValue] = React.useState("");

  function handleChange(event) {
    const { value: inputValue } = event.target;
    setValue(inputValue);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // logic...
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="password"
        name="name-password"
        label="Insert a text..."
        onChange={handleChange}
        value={value}
        password
      />
    </form>
  );
}
