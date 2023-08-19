export const implementation = `
export function CodeVerificationImplementation() {

	const [code, setCode] = React.useState<string>("");

	const onCodeFull = (code: string): void => setCode(code);
	
	return (
	  <InputCode
		className="code-result"
		length={6}
		onCodeFull={onCodeFull}
		onlyNumber={false}
	  />
	);
}
`;
