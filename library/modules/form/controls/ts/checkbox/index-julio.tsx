import React, { InputHTMLAttributes, forwardRef, RefAttributes, useState } from 'react';
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}
export /*bundle*/ const CheckboxJulio: React.FC<IProps & RefAttributes<HTMLInputElement>> = forwardRef(function (
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
	let cls: string = `pui-checkbox ${className ? className : ''}`;
	cls += disabled ? ' disabled' : '';
	const properties: IProps = Object.assign({}, props);

	['className', 'checked', 'name', 'onChange'].forEach((prop: string): void => {
		delete properties[prop];
	});

	return (
		<label className='pui-checkbox'>
			<input type='checkbox' title='checkbox' onChange={handleChange} />
			<span className='checkmark' />
			{label}
		</label>
	);
});
