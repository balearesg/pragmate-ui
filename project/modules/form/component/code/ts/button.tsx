import  React, { MouseEvent, ReactNode, ButtonHTMLAttributes } from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { BeyondIcon } from '@bgroup/ui/icons';
import { BeyondSpinner } from '@bgroup/ui/spinner';

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
	data?: Array<any>;
	label?: ReactNode;
	children?: ReactNode;
	navigate?: string;
	icon?: string;
	loading?: boolean;
	colorSpinner?: string
};

export /*bundle*/
	function BeyondButton(props: props): JSX.Element {
	const { className, onClick, data, label, children, icon, loading, colorSpinner } = props;

	const onClickButton = (event: MouseEvent<HTMLButtonElement>): void => {
		if (onClick && typeof onClick === 'function') {
			onClick(event);
			return;
		}
		if (props.navigate) routing.pushState(`${props.navigate}`);
	};

	props.title ? (props['data-tippy-content'] = props.title) : null;

	const properties: props = {
		...props,
		type: !!props.type ? props.type : 'button',
	};

	if (data) {
		let properties: string[] = Object.keys(data);
		properties.map((entry: string) => (props[`data-${entry}`] = data[entry]));
	}
	let cls: string = className
		? `${className} beyond-button`
		: "beyond-button";
	cls += icon ? " has-icon" : "";
	delete properties.label;
	delete properties.icon;
	delete properties.children;
	delete properties.className;
	delete properties.loading;
	delete properties.colorSpinner
	return (
		<button className={cls} {...properties} onClick={onClickButton}>
			{icon && <BeyondIcon icon={icon} />}
			{label}
			{loading ? <BeyondSpinner color={colorSpinner ?? "var(--primary)"} /> : children}
		</button>
	);
}
