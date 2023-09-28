import * as React from 'react';
import { InputHTMLAttributes, forwardRef, RefAttributes, useState, HTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: HTMLAttributes<HTMLInputElement>['className'];
	label?: string;
}
export /*bundle*/ const Checkbox: React.FC<IProps & RefAttributes<HTMLInputElement>> = forwardRef(
	(props: IProps, ref: React.Ref<HTMLInputElement>): JSX.Element => {
		const { checked, name, disabled, className, onChange, label } = props;
		const [state, setState] = useState({ checked: !!checked });
		const handleChange = (event: React.MouseEvent<HTMLInputElement>): void => {
			setState({ checked: !checked });
			onChange && onChange(event);
		};
		let cls: string = `pragmate-checkbox ${className ? className : ''}`;
		cls += disabled ? ' disabled' : '';
		const properties = Object.assign({}, props);

		['className', 'checked', 'name', 'onChange'].forEach(prop => {
			delete properties[prop];
		});

		return (
			<>
				<div className={cls} onClick={handleChange}>
					<input
						style={{ display: 'none' }}
						ref={ref}
						type='checkbox'
						className='inp-cbx'
						id={name}
						name={name}
						checked={checked ?? state.checked}
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
			</>
		);
	}
);
