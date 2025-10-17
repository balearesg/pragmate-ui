import * as React from 'react';

interface IColorInputProps {
	id: string;
	label: string;
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
}

export function ColorInput({ id, label, value, onChange, placeholder }: IColorInputProps): JSX.Element {
	return (
		<div className="color-input__container">
			<label htmlFor={id} className="color-input__label">
				{label}
			</label>
			<div className="color-input__inputs">
				<input
					id={id}
					type="color"
					value={value}
					onChange={e => onChange(e.target.value)}
					className="color-input__color-picker"
				/>
				<input
					type="text"
					name={id}
					value={value}
					onChange={e => onChange(e.target.value)}
					className="color-input__text-input"
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
}
