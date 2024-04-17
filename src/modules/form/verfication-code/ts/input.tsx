import React from 'react';
interface IProps {
	className?: React.HTMLAttributes<HTMLInputElement>['className'];
	value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onFocus?: () => void;
	index: number;
}

export default React.forwardRef(function Input(props: IProps, ref: React.LegacyRef<HTMLInputElement>): JSX.Element {
	const className: string = React.useMemo((): string => {
		const propsClassName: string = props.className ?? '';
		const filledClassName: '' | 'filled' = Boolean(String(props.value ?? '').length) ? 'filled' : '';
		return `box ${propsClassName} ${filledClassName}`;
	}, [props.value, props.className]);

	return (
		<input
			{...props}
			maxLength={1}
			data-index={props.index}
			type='text'
			// inputMode='numeric'
			className={className}
			ref={ref}
		/>
	);
});
