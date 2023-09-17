import * as React from 'react';
import { IItem } from './interfaces/IComponent';
import { ItemMenu } from './items';

export function SectionMenu({ children, items, tabIndex }) {
	const output = items.map((component: IItem) => {
		const [path] = component;
		return <ItemMenu key={path} tabIndex={tabIndex++} component={component} />;
	});

	return (
		<section>
			{children}
			<nav className="aside__nav" role="navigation">
				<ul className="aside__ul">{output}</ul>
			</nav>
		</section>
	);
}
