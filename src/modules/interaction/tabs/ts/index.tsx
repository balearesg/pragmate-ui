import React from 'react';
import { TabsContext } from './context';
import { ITabsContainerProps } from './definitions';
import { AnimatePresence } from 'framer-motion';

export /* bundle  */ function TabsContainer({ active, onChange, className, children, panes }: ITabsContainerProps) {
	const activeIndex = active || 0;
	const [activeTab, setActiveTab] = React.useState(activeIndex);
	const value = { panes, activeTab, setActiveTab, onChange };

	const cls = `pui-tabs-container${className ? ` ${className}` : ''}`;
	return (
		<TabsContext.Provider value={value}>
			<AnimatePresence>
				<section className={cls}>{children}</section>
			</AnimatePresence>
		</TabsContext.Provider>
	);
}
