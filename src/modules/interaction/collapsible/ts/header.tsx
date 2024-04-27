import React from 'react';
import { useCollapsibleContext } from './context';
import { IconButton } from 'pragmate-ui/icons';

interface ICollapsibleProps {
	children: React.ReactNode;
	className?: string;
	toggleTitle?: boolean;
}
export /*bundle */ function CollapsibleHeader({
	children,
	className,
	toggleTitle = true,
}: ICollapsibleProps): JSX.Element {
	const { setOpen, onToggle, open } = useCollapsibleContext();

	const onClick = async () => {
		if (!onToggle) {
			setOpen(!open);
			return;
		}

		if (await onToggle(!open)) setOpen(!open);
	};
	const cls = `collapsible__header ${className ? ` ${className}` : ''} ${open ? 'open' : ''}`;
	const clsButton = `collapsible__button ${open ? ' collapsible__button--opened' : ''}`;
	const attrs: { className: string; onClick?: () => void } = { className: cls };
	if (toggleTitle) {
		attrs.onClick = onClick;
	}
	return (
		<header {...attrs}>
			<div className='collapsible__header-content'>{children}</div>
			<IconButton onClick={onClick} className={clsButton} icon={'left'} />
		</header>
	);
}
