import * as React from 'react';
import { useTabsContext } from './context';

export /*bundle*/ function Panes({ children }) {
	const { activeTab } = useTabsContext();
	const childrenArray = React.Children.toArray(children);
	const Control = childrenArray[activeTab] as React.ReactElement;

	return <section className="tab-content">{Control}</section>;
}
