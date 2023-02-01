import React from "react";
import { BeyondButton } from "@bgroup/ui/form";

export function Results() {
	function handleChange(event) {
		event.stopPropagation();
		// logic...
	};
	return (
		<BeyondButton className="btn btn-primary" onClick={handleChange}>Beyond Button</BeyondButton>
	);
}
