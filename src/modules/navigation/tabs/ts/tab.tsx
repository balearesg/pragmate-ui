import React from 'react';
import { useTabsContext } from './context';
import { IProps, ITabProps } from './definitions';
import { routing } from '@beyond-js/kernel/routing';

export /*bundle */ function Tab(props: ITabProps) {
	const { children, index, disabled, className, name } = props;
	const { activeTab, setActiveTab, onChange, trackUrl } = useTabsContext();
	let cls = `tab ${index === activeTab ? 'active' : ''} ${disabled ? ' is-disabled' : ''}`;
	if (className) cls += ' ' + className;
	const onClick = (event: Event) => {
		// todo: this event must be removed

		if (trackUrl) {
			// Convert `routing.uri.qs.entries` to an object
			const queryParams = Object.fromEntries(routing.uri.qs.entries());

			// Update the `tab` parameter
			queryParams.tab = name;

			// Build the new query string
			const queryString = new URLSearchParams(queryParams).toString();

			// Update the URL without reloading the page
			routing.replaceState({}, '', `${routing.uri.pathname}?${queryString}`);
		}

		if (onChange) onChange(event, index);
		setActiveTab(index);
	};

	const attrs: { onClick?: (event) => void } = {};

	if (!disabled) attrs.onClick = onClick;

	return (
		<div className={cls} {...attrs} data-name={name} data-index={index}>
			{children}
		</div>
	);
}
