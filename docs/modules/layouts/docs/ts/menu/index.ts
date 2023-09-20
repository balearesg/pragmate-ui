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
		'Modals',
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
		'Menu',
		[
			['Menu', 'menu'],
			['DropdownBottomMenu', 'dropdown-bottom-menu'],
		],
	],
	['Theme switch', 'theme-switch', []],
	['Button', 'buttons', []],
	['Progress Bar', 'progress-bar', []],
	['Code', 'code', []],
	['Pricing', 'pricing', []],
	['Spinner', 'spinner', []],
	['BreadCrumb', 'breadcrumb', []],
	['Opinions', 'opinions', []],
	['Input Controller', 'input-controller', []],
	['Image', 'image', []],
	['Scroll', 'scroll-container', []],
	['ButtonGroup', 'button-group'],
	['Tabs', 'tabs', []],
	['New Tabs', 'tabs-new', []],
	['Toast', 'toast', []],
	['Swiper', 'swiper', []],
	['Verification Code', 'code-verification', []],
	['Select', 'select', []],
	['Alert', 'alert', []],
	['Tooltips', 'tooltips', []],
	['Drag And Drop', 'drag-and-drop', []],
	['Link', 'link', []],
].sort((a, b) => {
	if (a[1] < b[1]) return -1;
	if (a[1] > b[1]) return 1;
	return 0;
});
