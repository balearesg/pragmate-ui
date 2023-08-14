import * as React from 'react';
import { useCollapsibleContext } from './context';
import { IconButton } from 'pragmate-ui/icons';

interface ICollapsibleProps {
	children: React.ReactNode;
	className?: string;
}
export /*bundle */ function CollapsibleHeader({ children, className }: ICollapsibleProps): JSX.Element {
	const { setOpen, onToggle, open } = useCollapsibleContext();

	const onClick = async () => {
		if (onToggle) await onToggle(!open);

		setOpen(!open);
	};
	const cls = `collapsible__header ${className ? ` ${className}` : ''} ${open ? 'open' : ''}`;
	const clsButton = `collapsible__button ${open ? ' collapsible__button--opened' : ''}`;
	return (
		<header className={cls}>
			<div>{children}</div>
			<IconButton onClick={onClick} className={clsButton} icon={'left'} />
		</header>
	);
}
