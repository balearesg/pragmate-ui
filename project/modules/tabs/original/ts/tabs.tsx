import * as React from 'react';
import { useState, PropsWithChildren } from 'react';
import { useTabsContext } from './context';
import { Tab } from './tab';
import { routing } from '@beyond-js/kernel/routing';
import { Iprops, Iproperties } from './types';
export /*bundle*/ function Tabs(props: PropsWithChildren<Iprops>): JSX.Element {
	const [state, setState] = useState({
		active: true,
		valueSelected: 0,
	});

	const { tabNavigate: tabNavigateGo, selected } = useTabsContext();

	const tabNavigate = (event: React.MouseEvent<HTMLDivElement>, callback) => {
		const target = event.currentTarget;
		const index = parseInt(target.dataset.index);
		const path = target.dataset.path;
		setState({
			valueSelected: index,
			active: index !== state.valueSelected ? true : !state.active,
		});

		if (callback) callback(event);

		tabNavigateGo(index);

		if (path) routing.replaceState({}, undefined, path);
	};

	const { children, nolink } = props;
	const { active, valueSelected } = state;

	const output = children.map((tab, index) => {
		const properties: Iproperties = {
			key: index,
			selected: selected,
			isActive: active,
			index: index,
			'data-index': index,
			'data-path': tab.props['data-path'],
		};

		if (!nolink) properties.onClick = tabNavigate;
		else properties.nolink = true;

		if (tab.props.onClick) properties.onClick = event => tabNavigate(event, tab.props.onClick);

		if (tab.type === Tab) return React.cloneElement(tab, properties);

		return (
			<Tab {...properties} key={index}>
				{tab}
			</Tab>
		);
	});

	return (
		<div className='pui-tabs-items'>
			<div className='tabs-container'>{output}</div>
		</div>
	);
}
