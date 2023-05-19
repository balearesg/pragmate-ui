import React from "react";
import { Icon } from "@bgroup/ui/icons";
export function Search({ onSearch }): JSX.Element {
  const [value, setValue] = React.useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;
    setValue(value);
    if (onSearch) onSearch(value);
  };
  return (
    <div>
      <div className="container-search">
        <Icon icon="search" />
        <input
          type="search"
          value={value}
          placeholder="Find icon"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
