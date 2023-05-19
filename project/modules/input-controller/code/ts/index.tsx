import * as React from 'react';
import { inputComponents } from './input-components';

interface Props {
	template: Array<any> | any;
}

export /*bundle*/ function Component({ template }: Props) {
	const isTemplateAnArray = Array.isArray(template);
	const SingleInput = (!isTemplateAnArray && inputComponents[template.type]) ?? inputComponents.default;

	const inputs =
		isTemplateAnArray &&
		template.map((input) => {
			const Element = inputComponents[input.type] ?? inputComponents.default;
			return <Element key={input.name} {...input} _components={inputComponents} />;
		});

	const output = Array.isArray(template) ? inputs : <SingleInput {...template} />;
	return <>{output}</>;
}
