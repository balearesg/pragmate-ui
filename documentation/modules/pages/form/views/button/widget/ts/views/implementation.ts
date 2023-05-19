export const implementation = `
export function ButtonImplementation() {

	function handleChange(event) {
		event.stopPropagation();
		// logic...
	};
	
	return (
		<Button className="btn btn-primary" onClick={handleChange}>Beyond Button</Button>
	);
}`;

export const implementationSpinner = `
<Button
	className="btn btn-primary"
	loading={true}
	colorSpinner="#fff"
	>
	Beyond Button with spinner
</Button>
}`;

export const implementationIcon = `
<Button
	className="btn btn-primary"
	icon="delete"
	>
	Button icon
</Button>
}`;

export const implementationSecondary = `
<Button className="btn btn-secondary">
	Button secondary
</Button>
}`;

export const implementationBorder = `
<Button className="btn btn-border">
	Button border
</Button>
}`;

export const implementationCancel = `
<Button className="btn btn-cancel">
	Button cancel
</Button>
}`;
