export const implementation = `
export function Results() {
	const [value, setValue] = React.useState('');

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
			<BeyondInput type="text" name="name" label="Insert a text..." onChange={handleChange} value={value} />
		</form>
	);
}`;

export const implementationError = `
<BeyondInput
	type="text"
	label="Insert a text..."
	hasError={true}
	errorMessage="Error in input"
/>
`;

export const implementationIcon = `
<BeyondInput
	type="text"
	label="Insert a text..."
	icon="user"
/>
`;

export const implementationDisabled = `
<BeyondInput
	type="text"
	label="Insert a text..."
	disabled
/>
`;

export const implementationPassword = `
<BeyondInput
	type="password"
	label="Insert a text..."
	password
/>
`;

export const implementationLoading = `
<BeyondInput
	type="text"
	label="Insert a text..."
	loading
	colorSpinner="#fff"
/>
`;