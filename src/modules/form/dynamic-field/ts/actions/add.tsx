// AddButton.tsx
import React from 'react';
import { useDynamicFieldContext } from '../context';
import { ActionWrapper } from './wrapper';

interface AddButtonProps {
	template: Record<string, string>;
	children: React.ReactElement;
}

export /*bundle*/ const AddButton = ({ template, children }: AddButtonProps) => {
	const { onAdd } = useDynamicFieldContext();

	return <ActionWrapper onClick={onAdd}>{children}</ActionWrapper>;
};
