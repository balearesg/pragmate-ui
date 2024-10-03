// field-row.tsx
import React, { ReactNode, ReactElement } from 'react';
import { IField } from './types';

interface FieldRowProps {
	field: IField;
	index: number;
	children: ReactNode;
	onRemove: (index: number) => void;
	onUpdate: (index: number, name: string, value: string) => void;
}

export const FieldRow = ({ field, index, children, onRemove, onUpdate }: FieldRowProps) => {
	const renderChild = (child: ReactNode) => {
		if (!React.isValidElement(child)) return child;

		const onChange = (e: React.ChangeEvent<HTMLInputElement>) => onUpdate(index, child.props.name, e.target.value);
		return React.cloneElement(child as ReactElement, {
			value: field[child.props.name] || '',
			onChange,
		});
	};

	const renderChildren = () => React.Children.map(children, renderChild);

	return <div data-index={index}>{renderChildren()}</div>;
};
