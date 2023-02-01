export const implementation = `
function Implementation() {
    const output: JSX.Element[] = [];
	for (let i: number = 65; i <= 90; i++) {
		output.push(<li key={i}>{String.fromCharCode(i)}</li>)
	};
    const logoTest : string = 'The root of your logo';
	return (
		<div className="results">
			<DropdownSidebar logo={<BeyondImage src={logoTest} alt="Logo" />}>
				{output}
			</DropdownSidebar>
		</div>
	);
`;
