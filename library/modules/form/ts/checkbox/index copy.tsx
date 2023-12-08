import React, { InputHTMLAttributes, forwardRef, RefAttributes, useState } from 'react';
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}
export /*bundle*/ const CheckboxFran: React.FC<IProps & RefAttributes<HTMLInputElement>> = forwardRef(function (
	props: IProps,
	ref: React.Ref<HTMLInputElement>
): JSX.Element {
	const { checked, name, disabled, className, onChange, label } = props;
	const [value, setValue] = useState<boolean>(!!checked);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.stopPropagation();
		setValue(!!checked);
		onChange && onChange(event);
	};
	let cls: string = `pragmate-checkbox ${className ? className : ''}`;
	cls += disabled ? ' disabled' : '';
	const properties: IProps = Object.assign({}, props);

	['className', 'checked', 'name', 'onChange'].forEach((prop: string): void => {
		delete properties[prop];
	});

	return (
		<div className={cls}>
			<input
				style={{ display: 'none' }}
				ref={ref}
				type='checkbox'
				className='inp-cbx'
				id={name}
				name={name}
				checked={checked ?? value}
				onChange={handleChange}
				{...properties}
			/>
			<label className='cbx' htmlFor={name}>
				<span>
					<svg width='12px' height='9px' viewBox='0 0 12 9'>
						<polyline points='1 5 4 8 11 1'></polyline>
					</svg>
				</span>
				<span>{label}</span>
			</label>
		</div>
	);
});
