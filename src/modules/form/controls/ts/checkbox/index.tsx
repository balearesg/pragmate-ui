<<<<<<< HEAD
import { IPUIProps } from 'pragmate-ui/base';
import React, { MouseEvent, RefAttributes, forwardRef, useEffect, useState } from 'react';
import { IFormCheckableProps } from '../types';

export /*bundle*/ const Checkbox: React.FC<IPUIProps & RefAttributes<HTMLInputElement>> = forwardRef(function (
	props: IFormCheckableProps,
	ref: React.Ref<HTMLInputElement>,
=======
import React, { InputHTMLAttributes, forwardRef, RefAttributes, useState, useEffect, MouseEvent } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}
export /*bundle*/ const Checkbox: React.FC<IProps & RefAttributes<HTMLInputElement>> = forwardRef(function (
	props: IProps,
	ref: React.Ref<HTMLInputElement>
>>>>>>> e2db5c9b9493c304e12ce9e826eab9b79973b19b
): JSX.Element {
	const { checked, disabled, className, onChange, label } = props;
	const [value, setValue] = useState<boolean>(!!checked);
	useEffect(() => {
		setValue(!!checked);
	}, [checked]);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.stopPropagation();
		setValue(!value);
		onChange && onChange(event);
	};
	let cls: string = `pui-checkbox ${className ? className : ''}`;
	cls += disabled ? ' disabled' : '';
<<<<<<< HEAD
	const properties: IFormCheckableProps = Object.assign({}, props);
=======
	const properties: IProps = Object.assign({}, props);
>>>>>>> e2db5c9b9493c304e12ce9e826eab9b79973b19b

	['className', 'checked', 'name', 'onChange'].forEach((prop: string): void => {
		delete properties[prop];
	});

	const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
	const name = props.name ?? 'pui-checkbox--name';
	const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;

	const handleClick = (event: MouseEvent) => event.stopPropagation();
	return (
		<div className={cls} onClick={handleClick}>
			<input
				ref={ref}
				type='checkbox'
				className='pui-checkbox--input'
				id={id}
				name={name}
				checked={value}
				onChange={handleChange}
				{...properties}
			/>
			<label className='pui-checkbox--label' htmlFor={id}>
				<span>
					<svg viewBox='0 0 12 9'>
						<polyline points='1 5 4 8 11 1'></polyline>
					</svg>
				</span>
				<span>{label}</span>
			</label>
		</div>
	);
});
