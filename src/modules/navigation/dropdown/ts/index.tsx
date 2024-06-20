import React from 'react';
import { DropdownContext } from './context';
import { IDropdownProps } from './types';
import { DropdownContainer } from './components/container';

export /*bundle*/ function Dropdown({ children, className }: React.PropsWithChildren<IDropdownProps>): JSX.Element {
	const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);
	const value = { toggleMenu, setToggleMenu };

	return (
		<DropdownContext.Provider value={value}>
			<DropdownContainer className={className}>{children}</DropdownContainer>
		</DropdownContext.Provider>
	);
}
