import * as React from 'react';
import { useDropdownContext } from '../context';
type props = {
	className?: string;
};

export /*bundle*/ function DropdownToggle({ children, className }: React.PropsWithChildren<props>): JSX.Element {
	const cls = `pui-dropdown__toggle${className ? ` ${className}` : ''}`;
	const { toggleMenu, setToggleMenu } = useDropdownContext();
	const onClick = (event: React.SyntheticEvent): void => {
		event.stopPropagation();
		setToggleMenu(!toggleMenu);
	};
	return (
		<div onClick={onClick} className={cls}>
			{children}
		</div>
	);
}
