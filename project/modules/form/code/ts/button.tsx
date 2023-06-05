import React, { MouseEvent, ReactNode, ButtonHTMLAttributes } from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { Icon } from 'simply-ui/icons';
import { Spinner } from 'simply-ui/spinner';
import { RippleEffect } from 'simply-ui/ripple';

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
	data?: Array<any>;
	label?: ReactNode;
	children?: ReactNode;
	navigate?: string;
	icon?: string;
	loading?: boolean;
	variant: string;
	bordered: boolean;
}

export /*bundle*/
function Button(props: props): JSX.Element {
	const { className, onClick, data, label, children, icon, loading, variant = 'primary', bordered = false } = props;
	const ref = React.useRef<HTMLButtonElement>(null);
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

	props.title ? (props['data-tippy-content'] = props.title) : null;

	const properties: props = {
		...props,
		type: !!props.type ? props.type : 'button',
	};

	if (data) {
		let properties: string[] = Object.keys(data);
		properties.map((entry: string) => (props[`data-${entry}`] = data[entry]));
	}

	let cls: string = `${className ? `${className} ` : ''}beyond-button btn-${variant}`;
	cls += bordered ? ' outline' : '';
	cls += icon ? ' has-icon' : '';

	['label', 'icon', 'children', 'className', 'loading', 'colorSpinner'].forEach(property => {
		delete properties[property];
	});
	return (
		<button ref={ref} className={cls} {...properties} onClick={onClickButton}>
			{icon && <Icon icon={icon} />}
			{label}
			{loading ? <Spinner color={`on-${variant}`} /> : children}
		</button>
	);
}
