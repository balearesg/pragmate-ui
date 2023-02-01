export const implementation = `
export function SwitchImplementation() {
	const [isActive, setIsActive] = React.useState(true);

	function handleChange() {
		setIsActive(!isActive);
	}

	function handleSubmit(event) {
		event.preventDefault();
		// Logic...
	}

	return (
		<form onSubmit={handleSubmit} className="results-form">
			<BeyondSwitch className="checkbox" checked={isActive} onChange={handleChange} />
		</form>
	);
}`;
