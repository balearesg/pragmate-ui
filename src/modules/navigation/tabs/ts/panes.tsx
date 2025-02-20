import React from 'react';
import { useTabsContext } from './context';
import { IProps } from './definitions';

export /*bundle*/ function Panes({ children, className, items }: IProps) {
	const { activeTab } = useTabsContext();

	if (items) {
		console.log('renderizando items');
		const Control = items[activeTab];
		return (
			<section className={`tab-content ${className ? ` ${className}` : ''}`}>
				<Control />
			</section>
		);
	}

	const childrenArray = React.Children.toArray(children);
	const Control = childrenArray[activeTab] as React.ReactElement;
	const cls = `tab-content ${className ? ` ${className}` : ''}`;

	return <section className={cls}>{Control}</section>;
}
