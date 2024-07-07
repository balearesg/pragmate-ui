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
	['Badge', 'badges', []],
	['Chip', 'chip', []],
	['Button', 'buttons', []],
	['Progress Bar', 'progress-bar', []],
	['Vertical Line', 'vertical-line', []],
	['Code', 'code', []],
	['Spinner', 'spinner', []],
	['Preload', 'preload', []],
	['BreadCrumb', 'breadcrumb', []],
	['Image', 'image', []],
	['Scroll', 'scroll-container', []],
	['ButtonGroup', 'button-group'],
	['Collapsible', 'collapsible'],
	['Tabs', 'tabs', []],
	['Toast', 'toast', []],
	['Swiper', 'swiper', []],
	['Verification Code', 'code-verification', []],
	['Select', 'select', []],
	['Alert', 'alert', []],
	['ReactSelect', 'react-select', []],
	['Tooltips', 'tooltips', []],
	['Link', 'link', []],
	['DynamicList', 'dynamic-list', []],
	['Lists', 'lists', []],
	['Context Menu', 'context-menu', []],
].sort((a, b) => {
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
});
