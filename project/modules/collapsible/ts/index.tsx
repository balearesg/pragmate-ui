import * as React from 'react';
import { CollapsibleHeader } from './header';
import { CollapsibleContext } from './context';

interface ICollapsibleHeaderProps {
	children: React.ReactNode;
	className?: string;
	onToggle?: (open: boolean) => void;
}

export /*bundle */ function CollapsibleContainer({
	children,
	onToggle,
	className,
}: ICollapsibleHeaderProps): JSX.Element {
	const [open, setOpen] = React.useState(false);
	const value = { open, setOpen, onToggle };
	const cls = `collapsible__container ${className ? ` ${className}` : ''} `;
	return (
		<CollapsibleContext.Provider value={value}>
			<article className={cls}>{children}</article>
		</CollapsibleContext.Provider>
	);
}
