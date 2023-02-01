export const implementation = `
export function CheckboxImplementation() {
	const [selectedValue, setSelectedValue] = React.useState(false);

	function handleChange(event) {
		const { checked } = event.target;
		setSelectedValue(checked);
	};

	return (
		<form className="results-form">
			<BeyondCheckbox
				onChange={handleChange}
				checked={selectedValue}
				name='check'
			/>
		</form>
	);
}`;
