// RemoveButton.tsx
import React from 'react';
import { useDynamicFieldContext } from '../context';
import { ActionWrapper } from './wrapper';

interface RemoveButtonProps {
	index: number;
	children: React.ReactElement;
}

export /*bundle*/ const RemoveButton = ({ index, children }: RemoveButtonProps) => {
	const { onRemove } = useDynamicFieldContext();
	return <ActionWrapper onClick={() => onRemove(index)}>{children}</ActionWrapper>;
};
