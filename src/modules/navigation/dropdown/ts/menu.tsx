import React from 'react';
import { useDropdownContext } from './context';
import { useClickContainer } from './use-click-container';

type props = {
	className: string;
};

export /*bundle*/ function DropdownMenu({ children, className }: React.PropsWithChildren<props>): JSX.Element {
	const { showMenu, isToggle } = useDropdownContext();

	const { ref } = useClickContainer();
	console.log(1, 'showMenu, isToggle', showMenu, isToggle);
	if (!showMenu && !isToggle) return null;

	const cls: string = `${className ?? ''} dropdown-menu-container`;
	return (
		<div ref={ref} className={cls}>
			{children}
		</div>
	);
}
