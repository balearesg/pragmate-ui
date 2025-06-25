import React from 'react';

export interface ITabsContext {
	panes: any;
	activeTab: any;
	setActiveTab: any;
	trackUrl: boolean;
	onChange?: (event, index) => void;
	current?: string;
	currentTabName: string;
	setCurrentTabName: (name: string) => void;
	names: string[];
}
export const TabsContext = React.createContext({} as ITabsContext);
export const useTabsContext = () => React.useContext(TabsContext);
