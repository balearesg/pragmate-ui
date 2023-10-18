import React from 'react';
import {SidebarDropdown} from './dropdown';
import {SidebarItem} from './item';

export function ItemMenu({component, tabIndex = -1}) {
	const [label, path, children] = component;
	const Control = !!children?.length ? SidebarDropdown : SidebarItem;
	return <Control key={path} tabIndex={tabIndex} component={component} />;
}
