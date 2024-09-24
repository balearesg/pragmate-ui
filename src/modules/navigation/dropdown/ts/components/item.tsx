import React from 'react';
import { useDropdownContext } from '../context';
import { IDropdownItemProps } from '../types';
import { Link } from 'pragmate-ui/components';
import { IPUIProps } from 'pragmate-ui/base';

export /*bundle*/ function DropdownItem(props: React.PropsWithChildren<IDropdownItemProps>): JSX.Element {
	const { setToggleMenu } = useDropdownContext();
	const { children, className, onClick, as = Link, tag = Link } = props;
	const handleClick = async (event: React.MouseEvent): Promise<void> => {
		event.stopPropagation();
		if (!!onClick && typeof onClick === 'function') await onClick(event);
		setToggleMenu(false);
	};
	const Control: any = tag ?? 'div';
	const cls: string = `pui-dropdown-menu__item${className ? ` ${className}` : ''}`;
	const properties: IDropdownItemProps = Object.assign({}, props);
	const toDelete = ['children', 'className', 'onClick', 'tag', 'id'];
	toDelete.forEach(key => delete properties[key]);

	return (
		<li>
			<Control className={cls} onClick={handleClick} {...properties}>
				{children}
			</Control>
		</li>
	);
}
