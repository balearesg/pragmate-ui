import React from 'react';
import { useTabsContext } from './context';
import { useScroll } from './use-scroll';
import { Tab } from './tab';
import { IProps, ITabProps, TabsProps } from './definitions';

export /*bundle*/ const Tabs = ({ children, className }: IProps) => {
	const { activeTab } = useTabsContext();
	const ref = React.useRef<HTMLDivElement>(null);
	const cls = `pui-tabs-menu${className ? ` ${className}` : ''}`;
	const clone = (item, index) => {
		if (!React.isValidElement(item) || (item.type as React.FC) !== Tab) return item;

		const props = { ...(item.props as TabsProps), index, key: index };
		const tabChild = item as React.ReactElement<ITabProps>;
		return React.cloneElement(tabChild, props);
	};

	const output = React.Children.map(children, clone);
	useScroll(ref, activeTab);

	return (
		<header className={cls}>
			<div className='tabs' ref={ref}>
				{output}
			</div>
		</header>
	);
};
