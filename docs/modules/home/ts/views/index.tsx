import * as React from 'react';
import { ModuleProvider } from '../context';
import { ColorGenerator } from './color-generator';
import { DynamicListExample } from './dynamic-list';
import { MenuItem } from './menu-item';

const Controls = {
	colorGenerator: ColorGenerator,
	dynamicList: DynamicListExample,
};

export /*bundle*/
function View({ store }): JSX.Element {
	const [current, setCurrent] = React.useState<keyof typeof Controls>('colorGenerator');

	const CurrentComponent = Controls[current];
	const controlKeys = Object.keys(Controls) as Array<keyof typeof Controls>;

	const handleMenuSelect = (key: string) => {
		setCurrent(key as keyof typeof Controls);
	};

	const menuItems = controlKeys.map(key => (
		<MenuItem key={key} name={key} isActive={current === key} onSelect={handleMenuSelect} />
	));

	return (
		<ModuleProvider store={store}>
			<div className="home-page">
				<aside>
					<div className="menu">
						<header>
							<h5>Menu</h5>
						</header>
						<ul>{menuItems}</ul>
					</div>
				</aside>
				<main>
					<CurrentComponent />
				</main>
			</div>
		</ModuleProvider>
	);
}
