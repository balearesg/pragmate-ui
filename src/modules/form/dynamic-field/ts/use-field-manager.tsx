// use-field-manager.ts
import { useState, useEffect } from 'react';
import { IField } from './types';

export function useFieldManager(initialFields: IField[]) {
	const [fields, setFields] = useState<IField[]>(initialFields);

	useEffect(() => {
		setFields(initialFields);
	}, [initialFields]);

	const add = (template: IField) => {
		const newFields = [...fields, { ...template }];

		setFields(newFields);
		return newFields;
	};

	const remove = (index: number) => {
		if (fields.length > 1) {
			const newFields = fields.filter((_, i) => i !== index);
			setFields(newFields);
			return newFields;
		}
		return fields;
	};

	const update = (index: number, name: string, newValue: string) => {
		const newFields = fields.map((field, i) => (i === index ? { ...field, [name]: newValue } : field));
		setFields(newFields);
		return newFields;
	};

	return { fields, add, remove, update };
}
