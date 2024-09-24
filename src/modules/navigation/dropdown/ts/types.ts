import { IPUIProps } from 'pragmate-ui/base';
export interface IDropdownProviderProps {
	toggleMenu: boolean;
	setToggleMenu: (toggleMenu: boolean) => void;
}

export /*bundle*/ interface IDropdownProps {
	className?: string;
}

export /*bundle */ interface IDropdownItemProps extends IPUIProps {
	/**
	 * @deprecated
	 */
	tag?: string;
}
