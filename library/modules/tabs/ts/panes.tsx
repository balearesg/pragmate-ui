import React from 'react';
<<<<<<< HEAD
import {useTabsContext} from './context';

export /*bundle*/ function Panes({children}) {
	const {activeTab} = useTabsContext();
	const childrenArray = React.Children.toArray(children);
	const Control = childrenArray[activeTab] as React.ReactElement;

	return <section className="tab-content">{Control}</section>;
=======
import { useTabsContext } from './context';

export /*bundle*/ function Panes({ children, className }) {
	const { activeTab } = useTabsContext();
	const childrenArray = React.Children.toArray(children);
	const Control = childrenArray[activeTab] as React.ReactElement;
	const cls = `tab-content ${className ? ` ${className}` : ''}`;
	return <section className={cls}>{Control}</section>;
>>>>>>> dev
}
