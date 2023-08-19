export const implementationsButton = `
import * as React from "react";
import { form, button, input, checkbox } from "pragmate-ui/form"; 
export function myForm() {
    const [value, setValue] = React.useState('');
	function handleChange(event) {
		const { value: inputValue } = event.target;
		setValue(inputValue);
	}

    function handleSubmit(event) {
        //	...logic
    }

  return (
    <Form onSubmit={handleSubmit} className="results-form">
        <h2>Enter your data</h2>
        <Input type="text" name="name" label="Insert a name..." onChange={handleChange} value={value} />
        <Input type="email" name="email" label="Insert a email..." onChange={handleChange} value={value} />
        <Button variant="primary" bordered="true">Send!</Button>
    </Form>
  );
}

`;
