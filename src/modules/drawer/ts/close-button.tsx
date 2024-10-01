import React from 'react';
import { IconButton } from 'pragmate-ui/icons';
import { useDrawerContext } from './context';

export interface CloseButtonProps {
	className?: string;
	onClick?: () => void;
}
export /*bundle*/ function CloseButton({ className, onClick }: Partial<CloseButtonProps>) {
	const { onClose } = useDrawerContext();
	const listener = event => {
		if (onClick) return onClick();

		onClose();
	};
	const cls = `pui-drawer-close-button circle${className ? ` ${className}` : ''}`;
	return <IconButton className={cls} icon='close' onClick={listener} />;
}
