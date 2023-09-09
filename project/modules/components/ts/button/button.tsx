import * as React from 'react';
import { Icon } from 'pragmate-ui/icons';
import { Spinner } from 'pragmate-ui/spinner';
import { RippleEffect } from 'pragmate-ui/ripple';
import tippy from 'tippy.js';
import { IProps } from './interface';
import { ButtonGroupContext } from '../button-group/context';

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
		block,
		index,
		fetching = false,
		variant = 'primary',
		bordered = false,
		disabled = false,

		...otherProps
	} = props;

	const context = React.useContext(ButtonGroupContext);

	const refObject = React.useRef<HTMLButtonElement>(null);
	const combinedRef = (instance: HTMLButtonElement) => {
		refObject.current = instance;
		if (typeof ref === 'function') ref(instance);
		else if (ref) ref.current = instance;
	};
	const useContext = typeof context?.setSelected === 'function';
	const onClickButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
		if (useContext) {
			context.setSelected(index);
		}
		if (onClick && typeof onClick === 'function') {
			onClick(event);
			return;
		}
	};

	React.useEffect(() => {
		const ripple = new RippleEffect();
		ripple.add(refObject.current);

		if (title) {
			tippy(refObject.current);
		}
	}, [title]);

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
	cls += block ? ' btn--block' : '';
	cls += loading || fetching ? ' btn--loading' : '';
	const clsLoading = `button-label ${loading ? 'button-label--loading' : ''}`;
	if (useContext && context.selected === index) cls += ' pui-btn--active';
	return (
		<button
			ref={combinedRef}
			className={cls}
			onClick={onClickButton}
			disabled={loading || disabled}
			{...properties}
		>
			{icon && <Icon icon={icon} />}
			{label || (children && <div className={clsLoading}>{label || children}</div>)}

			{(loading || fetching) && <Spinner type={`on-${variant}`} active={true} />}
		</button>
	);
});
