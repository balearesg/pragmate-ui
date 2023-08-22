import * as React from 'react';
import { Icon } from 'pragmate-ui/icons';
import { Spinner } from 'pragmate-ui/spinner';
import { RippleEffect } from 'pragmate-ui/ripple';
import tippy from 'tippy.js';
import { IProps } from './interface';
console.log(10, tippy);
const { forwardRef } = React;

export /*bundle*/ const Button = forwardRef<HTMLButtonElement, IProps>((props, ref) => {
	const {
		className,
		onClick,
		data,
		label,
		title,
		children,
		icon,
		loading,
		fetching = false,
		variant = 'primary',
		bordered = false,
		disabled = false,
		...otherProps
	} = props;

	const refObject = React.useRef<HTMLButtonElement>(null);
	const combinedRef = (instance: HTMLButtonElement) => {
		refObject.current = instance;
		if (typeof ref === 'function') ref(instance);
		else if (ref) ref.current = instance;
	};

	const onClickButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
		if (onClick && typeof onClick === 'function') {
			onClick(event);
			return;
		}
	};

	React.useEffect(() => {
		const ripple = new RippleEffect();
		ripple.add(refObject.current);

		if (title) tippy(refObject.current);
	}, []);

	const properties: IProps = {
		...otherProps,
		type: props.type ? props.type : 'button',
	};
	if (title) properties['data-tippy-content'] = title;
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
		<button
			ref={combinedRef}
			className={cls}
			onClick={onClickButton}
			disabled={loading || disabled}
			{...properties}
		>
			{icon && <Icon icon={icon} />}
			<div className={`button-label ${loading ? 'loading' : ''}`}>{label || children}</div>
			{(loading || fetching) && <Spinner type={`on-${variant}`} active={true} />}
		</button>
	);
});
