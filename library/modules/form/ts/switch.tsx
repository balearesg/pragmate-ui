import React from 'react';
import { InputHTMLAttributes } from 'react';
interface props extends InputHTMLAttributes<HTMLInputElement> {
	variant?: string;
	title?: string;
}

export /* bundle */ function Switch(props: props) {
	const { checked, onChange, variant = 'primary', disabled, size = 'md', className, id, title, required } = props;
	const [isChecked, setIsChecked] = React.useState(checked);

	const handleChange = event => {
		setIsChecked(event.currentTarget.checked);
		console.log(event);
		onChange && onChange(event);
	};

	let classNameSwitch: string = `pui-element-switch ${className ? className : ''}`;
	classNameSwitch += disabled ? ' disabled' : '';

	let cls = isChecked ? `pui-element-switch__label active` : 'pui-element-switch__label';
	cls += variant ? ` ${variant}` : '';
	cls += size ? ` ${size}` : '';

	let isId = !id ? `pui-element-switch` : id;
	return (
		<div className={classNameSwitch}>
			<input
				className='pui-element-switch__checkbox'
				id={isId}
				title={title}
				required={required}
				type='checkbox'
				disabled={disabled}
				checked={isChecked}
				onChange={handleChange}
			/>
			<label className={cls} htmlFor={isId}>
				<span className={`label__btn--slider`} />
			</label>
		</div>
	);
}
