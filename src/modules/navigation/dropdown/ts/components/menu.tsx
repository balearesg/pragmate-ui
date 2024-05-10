import React from 'react';
import { IDropdownProps } from '../types';
import { useDropdownContext } from '../context';
import { motion } from 'framer-motion';
import { AnimatedDiv } from './animated-div';

export /*bundle*/ function DropdownMenu(props: React.PropsWithChildren<IDropdownProps>): JSX.Element {
	const { toggleMenu } = useDropdownContext();
	if (!toggleMenu) return null;
	let cls = `pui-dropdown-menu  pui-dropdown-menu--opened`;

	return (
		<AnimatedDiv className={cls}>
			<ul className='pui-dropdown-menu__list'>{props.children}</ul>
		</AnimatedDiv>
	);
}
