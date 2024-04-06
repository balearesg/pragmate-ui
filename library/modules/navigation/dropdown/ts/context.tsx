import React, { useContext, PropsWithChildren } from 'react';
import { IDropdownProviderProps } from './types';
const DropdownContext = React.createContext(null);
export const useDropdownContext = () => useContext(DropdownContext);

export /*bundle*/ function DropdownProvider(props: PropsWithChildren<IDropdownProviderProps>): React.ReactElement {
	const { children, isToggle, onToggle, isClose } = props;
	const [showMenu, setShowMenu] = React.useState<boolean>(false);
	const value = {
		showMenu,
		setShowMenu,
		isToggle,
		onToggle,
		isClose,
	};

	return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
}
