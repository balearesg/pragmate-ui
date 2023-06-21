import React, { ButtonHTMLAttributes, forwardRef, ReactNode, MouseEvent } from 'react';

import { Icon } from 'pragmate-ui/icons';
import { Spinner } from 'pragmate-ui/spinner';
import { RippleEffect } from 'pragmate-ui/ripple';
interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
	data?: Record<string, any>;
	label?: ReactNode;
	children?: ReactNode;
	icon?: string;
	loading?: boolean;
	fetching?: boolean;
	variant?: string;
	bordered?: boolean;
}

export const /*bundle */ Button = forwardRef<HTMLButtonElement, props>((props, ref) => {
		const {
			className,
			onClick,
			data,
			label,
			children,
			icon,
			loading,
			fetching = false,
			variant = 'primary',
			bordered = false,
			...otherProps
		} = props;

		if (!ref) ref = React.useRef<HTMLButtonElement>();
		const onClickButton = (event: MouseEvent<HTMLButtonElement>): void => {
			if (onClick && typeof onClick === 'function') {
				onClick(event);
				return;
			}
		};

		React.useEffect(() => {
			const ripple = new RippleEffect();
			ripple.add(ref.current);
		}, []);

		const properties: props = {
			...otherProps,
			type: props.type ? props.type : 'button',
		};

		if (data) {
			Object.keys(data).forEach((entry: string) => {
				properties[`data-${entry}`] = data[entry];
			});
		}

		let cls = `pragmate-button btn-${variant}`;
		cls += className ? ` ${className}` : '';
		cls += bordered ? ' outline' : '';
		cls += icon ? ' has-icon' : '';

		return (
			<button ref={ref} className={cls} {...properties} onClick={onClickButton}>
				{icon && <Icon icon={icon} />}
				{label}
				{loading || fetching ? <Spinner type={`on-${variant}`} active={true} /> : children}
			</button>
		);
	});
