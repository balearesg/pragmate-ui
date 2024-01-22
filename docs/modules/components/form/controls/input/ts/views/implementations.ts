export const implementation = `
export function Results() {
	const [value, setValue] = React.useState('');

	function handleChange(event) {
		const { value: inputValue } = event.target;
		setValue(inputValue);
	}

	return (
		<form>
			<Input type="text" name="name" label="Insert a text..." onChange={handleChange} value={value} />
		</form>
	);
}`;

export const implementationError = `
<Input
	type="text"
	label="Insert a text..."
	hasError={true}
	errorMessage="Error in input"
/>
`;

export const implementationIcon = `
<Input
	type="text"
	label="Insert a text..."
	icon="user"
/>
`;

export const implementationDate = `<Input type="date" label="Insert a text..." value={value} icon="user" />`;

export const implementationFloating = `
<Input 
	type="text" 
	label="Insert a text" 
	floating 
/>`;

export const implementationDisabled = `
<Input
	type="text"
	label="Insert a text..."
	disabled
/>
`;

export const implementationPassword = `
<Input
	type="password"
	label="Insert a text..."
	password
/>
`;

export const implementationButton = `
<Input type="text" name="name" label="Insert a text" onChange={handleChange} value={value}>
	<Button variant="primary">Search</Button>
</Input>
`;

export const implementationLoading = `
<Input
	type="text"
	label="Insert a text..."
	loading
	colorSpinner="#fff"
/>
`;
