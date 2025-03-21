import React from 'react';
import { useCollapsibleContext } from './context';
import { IconButton } from 'pragmate-ui/icons';
import type { ICollapsibleHeader } from './types';
import clsx from 'clsx';

export /*bundle */ function CollapsibleHeader({
	children,
	className,
	toggleTitle = true,
}: ICollapsibleHeader): JSX.Element {
	const { setOpen, onToggle, open, toggleable } = useCollapsibleContext();

	const onClick = async () => {
		if (!onToggle) {
			setOpen(!open);
			return;
		}

		if (await onToggle(!open)) setOpen(!open);
	};

	const cls = clsx('collapsible__header', className, { open });
	const clsButton = clsx('collapsible__button', 'collapsible__button--circle', {
		'collapsible__button--opened': open,
	});

	return (
		<header className={cls} onClick={onClick} aria-expanded={open}>
			<div className="collapsible__header-content">{children}</div>
			{toggleable && (
				<IconButton
					className={clsButton}
					icon="left"
					aria-label={open ? 'Collapse section' : 'Expand section'}
					aria-expanded={open}
				/>
			)}
		</header>
	);
}
