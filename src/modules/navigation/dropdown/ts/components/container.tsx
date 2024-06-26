import React from 'react';
import { DropdownContext, useDropdownContext } from '../context';
import { useClickContainer } from '../hooks/use-click-container';
import { IDropdownProps } from '../types';

export /*bundle*/ function DropdownContainer({
	children,
	className,
}: React.PropsWithChildren<IDropdownProps>): JSX.Element {
	const { toggleMenu, setToggleMenu } = useDropdownContext();

	const { ref } = useClickContainer({ toggleMenu, setToggleMenu });
	const cls: string = `pui-dropdown-container${className ? ` ${className}` : ''}`;

	return (
		<div ref={ref} className={cls}>
			{children}
		</div>
	);
}
