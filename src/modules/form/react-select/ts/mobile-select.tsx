import * as React from 'react';

export interface ISelect {
	/** Texto que servirá de etiqueta accesible  */
	label: string;
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	placeholder?: string;
	options: { value: string | number; label: string }[];
	isDisabled?: boolean;
	disabled?: boolean;
	/** Permite sobreescribir el id si lo necesitas */
	id?: string;
}

export function MobileSelect({ label, options, placeholder, id, isDisabled, disabled, ...rest }: ISelect) {
	const selectId = id ?? React.useId(); // genera id único

	return (
		<div className="pui-mobile-select__container">
			{/* Visiblemente oculto, pero disponible para lectores de pantalla */}
			<label htmlFor={selectId} className="sr-only">
				{label}
			</label>

			<select
				id={selectId}
				aria-label={label} // fallback por si alguien quita el <label>
				disabled={isDisabled || disabled}
				{...rest}
				className="pui-mobile-select"
			>
				{placeholder && <option value="">{placeholder}</option>}

				{options.map(({ value, label }) => (
					<option key={value.toString()} value={value}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
}
