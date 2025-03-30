import React from 'react';
import type { IProps } from './definitions';
import { IToast, toast } from './model';
import { Toast } from './toast';

type ExtendedIToast = IToast & { className?: string; position?: { [key: string]: string } };

export /*bundle*/ function Toasts({
	position = { bottom: '1rem', right: '1rem' },
	className,
	...props
}: Partial<IProps>): JSX.Element {
	const [items, setItems] = React.useState<Array<ExtendedIToast | undefined>>([]);

	React.useEffect(() => {
		const listener = () => setItems(toast.current);
		toast.on('current.toast.changed', listener);
		() => {
			toast.off('current.toast.changed', listener);
		};
	}, []);

	const elements = items.map((item: ExtendedIToast) => (
		<Toast key={item.id} {...item} className={className} position={position} />
	));

	return (
		<div style={position} className={`pui-toast__container ${className}`} {...props}>
			{elements}
		</div>
	);
}
