import React from 'react';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';
import { IToast, toast } from './model';
import { Toast } from './toast';
import type { IProps } from './definitions';

type ExtendedIToast = IToast & { className?: string; position?: { [key: string]: string } };

export /*bundle*/ function Toasts({
	position = { bottom: '1rem', right: '1rem' },
	className,
	...props
}: Partial<IProps>): JSX.Element {
	const [items, setItems] = React.useState<Array<ExtendedIToast | undefined>>([]);

	useBinder([toast], () => setItems(toast.current), 'current.toast.changed');

	const elements = items.map((item: ExtendedIToast) => (
		<Toast
			key={item.id}
			{...item}
			className={className}
			position={position}
		/>
	));

	return (
		<div style={position} className={`pui-toast__container ${className}`} {...props}>
			{elements}
		</div>
	);
}
