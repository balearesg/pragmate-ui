import React from 'react';

interface IConditionalContainerProps {
	condition: string | boolean | (() => string | boolean);
	options: Record<string, React.ReactElement>;
	placeholder?: React.ComponentType; // Componente por defecto opcional
	ternary?: boolean; // Nueva propiedad para soportar ternarios
}

export /*bundle*/ function ConditionalContainer({
	condition,
	options,
	placeholder,
	ternary,
}: IConditionalContainerProps) {
	const evaluatedValue = typeof condition === 'function' ? condition() : condition;

	let Component;

	if (ternary && typeof evaluatedValue === 'boolean') {
		Component = evaluatedValue ? options.true : options.false;
	} else {
		Component = options[evaluatedValue as string] || placeholder;
	}

	return Component ? Component : null;
}
