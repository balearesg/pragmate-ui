export const implementation = `
export function CheckboxImplementation() {
	const [selectedValue, setSelectedValue] = React.useState('radio-1');
	
	function handleChange(event) {
		const { value } = event.target;
		setSelectedValue(value);
	};

	return (
		<form className="results-form">
			<BeyondRadio
				onChange={handleChange}
				checked={selectedValue === 'radio-1'}
				name='name'
				value="radio-1"
				label="Radio 1"
			/>
			<BeyondRadio
				onChange={handleChange}
				checked={selectedValue === 'radio-2'}
				name='name'
				value="radio-2"
				label="Radio 2"
			/>
		</form>
	);
}`;
