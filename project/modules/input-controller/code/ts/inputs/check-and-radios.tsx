import * as React from 'react';

export function CheckAndRadios(props) {
	const { _components } = props;

	const output = props.options.map((option) => {
		const Element = _components[option.type] ?? _components.default;
		const type = option.type === 'radioItem' ? 'radio' : 'checkbox';
		option = { ...option, type };
		return <Element key={option.value} {...option} />;
	});

	return <>{output}</>;
}
