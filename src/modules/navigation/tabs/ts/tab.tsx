import React from 'react';
import { useTabsContext } from './context';
import { IProps, ITabProps } from './definitions';

export /*bundle */ function Tab(props: ITabProps) {
	const { children, index, disabled, className } = props;
	const { activeTab, setActiveTab, onChange } = useTabsContext();
	let cls = `tab ${index === activeTab ? 'active' : ''} ${disabled ? ' is-disabled' : ''}`;
	if (className) cls += ' ' + className;
	const onClick = event => {
		if (onChange) onChange(event, index);
		setActiveTab(index);
	};
	const attrs: { onClick?: (event) => void } = {};

	if (!disabled) attrs.onClick = onClick;

	return (
		<div className={cls} {...attrs}>
			{children}
		</div>
	);
}
