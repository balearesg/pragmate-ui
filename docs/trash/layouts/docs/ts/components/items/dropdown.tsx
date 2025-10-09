import * as React from 'react';
import { SidebarItem } from './item';
import { Icon } from 'pragmate-ui/icons';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';
import { routing } from '@beyond-js/kernel/routing';
import { IItem } from '../interfaces/IComponent';

export function SidebarDropdown({ component, tabIndex }) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
	const [currentRouting, setCurrentRouting] = React.useState(routing.uri.pathname);
	const location = `/components/${component.name}`;

	const isChecked = location === routing.uri.pathname ? 'sidebar__item--checked' : 'sidebar__item';
	const iconDirection = isDropdownOpen ? 'down' : 'right';
	const icon = isDropdownOpen ? 'expandMore' : 'chevronRight';

	useBinder([routing], () => setCurrentRouting(routing.uri.pathname));
	const [path, name, children] = component;
	const subComponentsElements = children.map((subComponent: IItem) => {
		const [path] = subComponent;
		return <SidebarItem key={path} component={subComponent} tabIndex={tabIndex} />;
	});

	function toggleDropdown(event) {
		event.preventDefault();
		setIsDropdownOpen(!isDropdownOpen);
	}

	return (
		<li className={isChecked}>
			<a className='sidebar-item__icon' onClick={toggleDropdown}>
				{name}
				<Icon icon={icon} name={name} className={iconDirection} />
			</a>
			{isDropdownOpen && <ul className='sub-list'>{subComponentsElements}</ul>}
		</li>
	);
}
