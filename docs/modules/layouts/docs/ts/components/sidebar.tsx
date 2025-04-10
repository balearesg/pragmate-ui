import * as React from 'react';

import { SectionMenu } from './section-menu';
import { gettingStartedItems } from '../bg.getting-started';
import { MenuHeader } from './header';
import { menuItems } from '../menu';

export function Sidebar() {
	let tabIndex = 1;

	return (
		<div>
			<aside className="doc__nav">
				<SectionMenu items={gettingStartedItems} tabIndex={tabIndex}>
					<MenuHeader icon="setting" title="Getting Started:" />
				</SectionMenu>
				<SectionMenu items={menuItems} tabIndex={tabIndex}>
					<MenuHeader icon="categories" title="Components:" />
				</SectionMenu>
			</aside>
		</div>
	);
}
