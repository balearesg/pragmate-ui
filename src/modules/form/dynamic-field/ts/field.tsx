// DynamicField.tsx
import React, { ReactNode, useMemo } from 'react';
import { useFieldManager } from './use-field-manager';
import { FieldRow } from './field-row';
import { DynamicFieldProps, IField } from './types';
import { ModuleContext } from './context';

const defaultFieldTemplate = (children: ReactNode): IField => {
	return React.Children.toArray(children).reduce((acc, child) => {
		if (React.isValidElement(child) && child.props.name) {
			acc[child.props.name] = '';
		}
		return acc;
	}, {} as IField);
};

export /*bundle*/ function DynamicField({ children, value, onChange }: DynamicFieldProps) {
	const { fields, add, remove, update } = useFieldManager(value);
	const fieldTemplate = useMemo(() => defaultFieldTemplate(children), [children]);
	const onAdd = () => {
		const newFields = add(fieldTemplate);
		if (onChange) onChange(newFields);
	};
	const onRemove = (index: number) => {
		const newFields = remove(index);
		if (onChange) onChange(newFields);
	};
	const onUpdate = (index: number, name: string, value: string) => {
		const newFields = update(index, name, value);
		if (onChange) onChange(newFields);
	};

	return (
		<ModuleContext.Provider value={{ fields, onAdd, onRemove, onUpdate }}>
			<div>
				<button type='button' onClick={onAdd}>
					Add
				</button>
				{fields.map((field, index) => (
					<FieldRow
						key={index}
						field={field}
						index={index}
						children={children}
						onRemove={onRemove}
						onUpdate={onUpdate}
					/>
				))}
			</div>
		</ModuleContext.Provider>
	);
}
