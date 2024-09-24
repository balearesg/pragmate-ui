import React from 'react';

interface IConditionalContainerProps {
	condition: string | (() => string);
	options: Record<string, React.ComponentType>;
	placeholder?: React.ComponentType; // Componente por defecto opcional
}

export /*bundle*/ function ConditionalContainer({ condition, options, placeholder }: IConditionalContainerProps) {
	const evaluatedValue = typeof condition === 'function' ? condition() : condition;
	const Component = options[evaluatedValue] || placeholder;

	return Component ? <Component /> : null;
}
