export interface IDropdownProviderProps {
	toggleMenu: boolean;
	setToggleMenu: (toggleMenu: boolean) => void;
}

export /*bundle*/ interface IDropdownProps {
	className?: string;
}

export /*bundle */ interface IDropdownItemProps {
	className?: string;
	onClick?: Function;
	tag?: string;
	id?: string;
}
