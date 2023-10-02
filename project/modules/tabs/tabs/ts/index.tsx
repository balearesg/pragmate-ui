import * as React from 'react';
import { TabsContext } from './context';
import { ITabProps } from './interfaces';

export /* bundle  */ const TabsContainer: React.FC<ITabProps> = ({ active, onChange, children, panes }) => {
	const activeIndex = active || 0;
	const [activeTab, setActiveTab] = React.useState(activeIndex);
	const value = { panes, activeTab, setActiveTab, onChange };

	return (
		<TabsContext.Provider value={value}>
			<section className="tab-container">{children}</section>
		</TabsContext.Provider>
	);
};
