import { FormItems } from './form';

const modalsChildren = [
	['Alert', 'alert-modal'],
	['Confirm', 'confirm-modal'],
	['Regular', 'regular-modal'],
];

const iconsChildren = [
	['Icon', 'icons-icon'],
	['Icon Button', 'icon-button'],
	['Icon List', 'icon-list'],
];

const menuChildren = [
	['Menu', 'menu'],
	['DropdownBottomMenu', 'dropdown-bottom-menu'],
];

// ... Las demás variables para los children aquí ...

export const menuItems = [
	['Empty', 'empty', []],
	FormItems,
	[
		'Modals',
		'modals',
		[
			['Alert', 'alert-modal'],
			['Confirm', 'confirm-modal'],
			['Regular', 'regular-modal'],
		],
	],
	[
		'Icons',
		'icons',
		[
			['Icon', 'icons-icon'],
			['Icon Button', 'icon-button'],
			['Icon List', 'icon-list'],
		],
	],
	[
		'Menu',
		'menu',
		[
			['Menu', 'menu'],
			['DropdownBottomMenu', 'dropdown-bottom-menu'],
		],
	],
	['Theme-switch', 'theme-switch', []],
	['Button', 'buttons', []],
	['Code', 'code', []],
	['Pricing', 'pricing', []],
	['Spinner', 'spinner', []],
	['BreadCrumb', 'breadcrumb', []],
	['Opinions', 'opinions', []],
	['Input Controller', 'input-controller', []],
	['Image', 'image', []],
	['Scroll', 'scroll-container', []],
	['Tabs', 'tabs', []],
	['Toast', 'toast', []],
	['Swiper', 'swiper', []],
	['Verification Code', 'code-verification', []],
	['Select', 'select', []],
	['Alert', 'alert', []],
	['Drag And Drop', 'drag-and-drop', []],
	['Link', 'link', []],
	['Badges', 'badges'],
];
