import * as React from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { useModuleContext } from '../../context';
import { INavigationItem, INavigationSection } from '../lib/navigation-data';

interface ISidebarProps {
	navigationData: INavigationSection[];
}

export function Sidebar({ navigationData }: ISidebarProps): JSX.Element {
	const { store } = useModuleContext();

	const handleNavigation = (path: string): void => {
		routing.pushState(path);
	};

	const renderNavigationItem = (item: INavigationItem): JSX.Element => {
		const isActive = routing.uri.pathname === item.path;

		return (
			<li key={item.id} className={`sidebar__item ${isActive ? 'sidebar__item--active' : ''}`}>
				<button className="sidebar__link" onClick={() => handleNavigation(item.path)} type="button">
					{item.icon && <span className="sidebar__icon">{item.icon}</span>}
					<span className="sidebar__text">{item.title}</span>
				</button>
			</li>
		);
	};

	const renderSection = (section: INavigationSection): JSX.Element => {
		return (
			<div key={section.id} className="sidebar__section">
				<h3 className="sidebar__section-title">{section.title}</h3>
				<ul className="sidebar__list">{section.items.map(renderNavigationItem)}</ul>
			</div>
		);
	};

	return (
		<aside className={`sidebar ${store.isSidebarOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
			<div className="sidebar__header">
				<h2 className="sidebar__title">Pragmate UI</h2>
				<button
					className="sidebar__toggle"
					onClick={() => store.toggleSidebar()}
					type="button"
					aria-label="Toggle sidebar"
				>
					<span className="sidebar__toggle-icon">{store.isSidebarOpen ? '←' : '→'}</span>
				</button>
			</div>

			<div className="sidebar__search">
				<input
					type="text"
					placeholder="Search documentation..."
					className="sidebar__search-input"
					value={store.searchQuery}
					onChange={e => store.setSearchQuery(e.target.value)}
				/>
			</div>

			<nav className="sidebar__nav">{navigationData.map(renderSection)}</nav>
		</aside>
	);
}
