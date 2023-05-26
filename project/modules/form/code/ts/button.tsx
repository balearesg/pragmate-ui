import React, { MouseEvent, ReactNode, ButtonHTMLAttributes } from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { Icon } from '@bgroup/ui/icons';
import { Spinner } from '@bgroup/ui/spinner';
import { RippleEffect } from '@bgroup/ui/ripple';

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
	data?: Array<any>;
	label?: ReactNode;
	children?: ReactNode;
	navigate?: string;
	icon?: string;
	loading?: boolean;
	colorSpinner?: string;
}

export /*bundle*/
function Button(props: props): JSX.Element {
	const { className, onClick, data, label, children, icon, loading, colorSpinner } = props;
	const ref = React.useRef<HTMLButtonElement>(null);
	const onClickButton = (event: MouseEvent<HTMLButtonElement>): void => {
		if (onClick && typeof onClick === 'function') {
			onClick(event);
			return;
		}
		if (props.navigate) routing.pushState(`${props.navigate}`);
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
	let cls: string = className ? `${className} beyond-button` : 'beyond-button';
	cls += icon ? ' has-icon' : '';

	['label', 'icon', 'children', 'className', 'loading', 'colorSpinner'].forEach(property => {
		delete properties[property];
	});
	return (
		<button ref={ref} className={cls} {...properties} onClick={onClickButton}>
			{icon && <Icon icon={icon} />}
			{label}
			{loading ? <Spinner color={colorSpinner ?? 'var(--primary)'} /> : children}
		</button>
	);
}
