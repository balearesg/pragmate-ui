export interface INavigationItem {
	id: string;
	title: string;
	path: string;
	icon?: string;
	children?: INavigationItem[];
}

export interface INavigationSection {
	id: string;
	title: string;
	items: INavigationItem[];
}

export const navigationData: INavigationSection[] = [
	{
		id: 'getting-started',
		title: 'Getting Started',
		items: [
			{ id: 'installation', title: 'Installation', path: '/docs/installation' },
			{ id: 'quick-start', title: 'Quick Start', path: '/docs/quick-start' },
			{ id: 'configuration', title: 'Configuration', path: '/docs/configuration' },
		],
	},
	{
		id: 'components',
		title: 'Components',
		items: [
			{ id: 'buttons', title: 'Buttons', path: '/docs/components/buttons' },
			{ id: 'forms', title: 'Forms', path: '/docs/components/forms' },
			{ id: 'navigation', title: 'Navigation', path: '/docs/components/navigation' },
			{ id: 'layout', title: 'Layout', path: '/docs/components/layout' },
			{ id: 'feedback', title: 'Feedback', path: '/docs/components/feedback' },
			{ id: 'data-display', title: 'Data Display', path: '/docs/components/data-display' },
		],
	},
	{
		id: 'patterns',
		title: 'Patterns',
		items: [
			{ id: 'design-system', title: 'Design System', path: '/docs/patterns/design-system' },
			{ id: 'accessibility', title: 'Accessibility', path: '/docs/patterns/accessibility' },
			{ id: 'theming', title: 'Theming', path: '/docs/patterns/theming' },
		],
	},
	{
		id: 'examples',
		title: 'Examples',
		items: [
			{ id: 'dashboard', title: 'Dashboard', path: '/docs/examples/dashboard' },
			{ id: 'ecommerce', title: 'E-commerce', path: '/docs/examples/ecommerce' },
			{ id: 'forms', title: 'Forms', path: '/docs/examples/forms' },
		],
	},
];
