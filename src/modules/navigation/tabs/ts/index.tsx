import React from 'react';
import { TabsContext } from './context';
import { ITabProps, ITabsContainerProps } from './definitions';
import { Tab } from './tab';
import { routing } from '@beyond-js/kernel/routing';
export /* bundle  */ function TabsContainer({
	active = 0,
	onChange,
	className,
	current,
	children,
	tabs = [],
	panes,
	trackUrl,
}: ITabsContainerProps) {
	// Extract tab names from children

	if (trackUrl) {
		const tab = routing.uri.qs.get('tab');
		current = current ?? tab;
	}

	const activeIndex = tabs.includes(current) ? tabs.indexOf(current) : active;
	console.log('estamos en', current, activeIndex, tabs, trackUrl);
	const [activeTab, setActiveTab] = React.useState(activeIndex);
	const [currentTabName, setCurrentTabName] = React.useState(current);
	// Update active tab if `current` prop changes

	const value = {
		panes,
		activeTab,
		setActiveTab,
		onChange,
		trackUrl,
		current: currentTabName,
		setCurrentTabName,
		names: tabs,
	};
	const cls = `pui-tabs-container${className ? ` ${className}` : ''}`;

	return (
		<TabsContext.Provider value={value}>
			<section className={cls}>{children}</section>
		</TabsContext.Provider>
	);
}
