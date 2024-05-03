import React from 'react';
import { useTabsContext } from './context';
import { useScroll } from './use-scroll';
import { Tab } from './tab';
import { ITabProps } from './interfaces';

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export /*bundle*/ const Tabs = ({ children, className }: TabsProps) => {
	const { activeTab } = useTabsContext();
	const ref = React.useRef<HTMLDivElement>(null);
	useScroll(ref, activeTab);

	const output = React.Children.map(children, (item, index) => {
		if (React.isValidElement(item) && (item.type as React.FC) === Tab) {
			const props = { ...item.props, index, key: index };
			const tabChild = item as React.ReactElement<ITabProps>;
			return React.cloneElement(tabChild, props);
		}
		return item;
	});
	const cls = `pui-tabs-menu${className ? ` ${className}` : ''}`;
	return (
		<header className={cls}>
			<div className='tabs' ref={ref}>
				{output}
			</div>
		</header>
	);
};
