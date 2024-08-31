import React from 'react';
import { CollapsibleContext } from './context';
import type { IContainerProps } from './types';

export /*bundle */ function CollapsibleContainer({
	children,
	onToggle,
	open = false,
	className,
}: IContainerProps): JSX.Element {
	open;
	const [opened, setOpen] = React.useState(open);
	const value = { open: opened, setOpen, onToggle };
	const cls = `collapsible__container ${className ? ` ${className}` : ''} `;

	return (
		<CollapsibleContext.Provider value={value}>
			<article className={cls}>{children}</article>
		</CollapsibleContext.Provider>
	);
}
