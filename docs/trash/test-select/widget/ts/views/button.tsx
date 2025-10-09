import React from 'react';
import { AriaButtonProps, useButton } from 'react-aria';
import { useRef } from 'react';

export const Button = (props: AriaButtonProps<'button'> & { style?: React.CSSProperties }) => {
	const ref = useRef<HTMLButtonElement>(null);
	const { buttonProps } = useButton(props, ref);
	const { style, ...restProps } = props;

	return (
		<button {...buttonProps} ref={ref} style={{ padding: '0.5rem 1rem', cursor: 'pointer', ...style }}>
			{props.children}
		</button>
	);
};
