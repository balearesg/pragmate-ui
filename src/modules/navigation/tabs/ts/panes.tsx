import React from 'react';
import { useTabsContext } from './context';
import { IProps } from './definitions';

export /*bundle*/ function Panes({ children, className }: IProps) {
	const { activeTab } = useTabsContext();

	const childrenArray = React.Children.toArray(children);
	const Control = childrenArray[activeTab] as React.ReactElement;
	const cls = `tab-content ${className ? ` ${className}` : ''}`;
	return <section className={cls}>{Control}</section>;
}
