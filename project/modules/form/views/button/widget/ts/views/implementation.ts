export const implementation = `
export function ButtonImplementation() {

	function handleChange(event) {
		event.stopPropagation();
		// logic...
	};
	
	return (
		<BeyondButton className="btn btn-primary" onClick={handleChange}>Beyond Button</BeyondButton>
	);
}`;

export const implementationSpinner = `
<BeyondButton
	className="btn btn-primary"
	loading={true}
	colorSpinner="#fff"
	>
	Beyond Button with spinner
</BeyondButton>
}`;

export const implementationIcon = `
<BeyondButton
	className="btn btn-primary"
	icon="delete"
	>
	Button icon
</BeyondButton>
}`;

export const implementationSecondary = `
<BeyondButton className="btn btn-secondary">
	Button secondary
</BeyondButton>
}`;

export const implementationBorder = `
<BeyondButton className="btn btn-border">
	Button border
</BeyondButton>
}`;

export const implementationCancel = `
<BeyondButton className="btn btn-cancel">
	Button cancel
</BeyondButton>
}`;