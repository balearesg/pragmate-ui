import * as React from "react";
import { Checkbox } from "pragmate-ui/form";

export function Results() {
  const [selectedValue, setSelectedValue] = React.useState(false);

  function handleChange(event) {
    const { checked } = event.target;
    setSelectedValue(checked);
  }

  return (
    <form className="results-form">
      <Checkbox onChange={handleChange} checked={selectedValue} name="check" />
    </form>
  );
}
