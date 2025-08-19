import React from 'react';
import { Icon } from 'pragmate-ui/icons';
import { Spinner } from 'pragmate-ui/spinner';
import { IButtonProps } from './interface';
import { ButtonGroupContext } from '../button-group/context';
import { useRipple, useTooltip } from '../use-ripple';

const { forwardRef } = React;

export /*bundle*/ const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, reference) => {
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
		variant = 'default',
		bordered = false,
		sizing = 'md',
		disabled = false,

		...otherProps
	} = props;

	const context = React.useContext(ButtonGroupContext);
	const [, setProcessing] = React.useState(fetching || loading);

	// Crear una ref local
	const localRef = React.useRef<HTMLButtonElement>(null);

	// Usar useRipple solo para el efecto de ripple
	const ref = useRipple('', localRef);

	// Usar useTooltip para el tooltip
	const { tooltipJSX } = useTooltip(title, localRef);

	// Conectar la ref externa si existe
	React.useImperativeHandle(reference, () => localRef.current!, []);

	const usingContext = typeof context?.setSelected === 'function';
	const onClickButton = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
		try {
			if (usingContext) {
				context.setSelected(index);
			}
			if (onClick && typeof onClick === 'function') {
				setProcessing(true);
				//@ts-ignore
				await onClick(event);

				setProcessing(false);
				return;
			}
		} finally {
			setProcessing(false);
		}
	};

	const properties: IButtonProps = {
		...otherProps,
		type: props.type ? props.type : 'button',
	};
	if (data) {
		Object.keys(data).forEach((entry: string) => {
			properties[`data-${entry}`] = data[entry];
		});
	}

	let cls = `pui-button btn-${variant}`;
	cls += className ? ` ${className}` : '';
	cls += bordered ? ' outline' : '';
	cls += icon ? ' has-icon' : '';
	cls += block ? ' btn--block' : '';
	cls += sizing ? ` btn--${sizing}` : '';
	cls += loading || fetching ? ' btn--loading' : '';
	const clsLoading = `button-label ${loading || fetching ? 'button-label--loading' : ''}`;

	if (usingContext && context.selected === index) cls += ' pui-btn--active';
	if (usingContext) properties['data-index'] = index;

	return (
		<button
			ref={ref}
			className={cls}
			onClick={onClickButton}
			disabled={loading || fetching || disabled}
			{...properties}
		>
			{icon && <Icon icon={icon} />}
			{label || (children && <div className={clsLoading}>{label || children}</div>)}

			{(loading || fetching) && <Spinner type={`on-${variant}`} active={true} />}
		</button>
	);
});
