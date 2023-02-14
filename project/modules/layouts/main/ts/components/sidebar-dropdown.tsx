import * as React from 'react';
import { SidebarItem } from './sidebar-item';
import { BeyondIcon } from '@bgroup/ui/icons';

export function SidebarDropdown({ component }) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
	const subComponentsElements = component.subComponents.map((subComponent: { path: string; name: string }) => <SidebarItem key={subComponent.path} component={subComponent} />);
	const iconDirection = isDropdownOpen ? 'down' : 'right';

	function toggleDropdown(event) {
		event.preventDefault();
		setIsDropdownOpen(!isDropdownOpen);
	}

	return (
		<li className="sidebar-item">
			<a onClick={toggleDropdown}>
				<BeyondIcon icon="arrowDropDown" className={iconDirection} />
				{component.name}
			</a>
			{isDropdownOpen && <ul className="sub-list">{subComponentsElements}</ul>}
		</li>
	);
}
