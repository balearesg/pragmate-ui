import { structureItems } from '../structure-item';

const styles = ['styles/template', 'styles/themes', 'styles/modules', 'styles/imports'];
const widgets = [
	'widgets',
	'widgets/controllers',
	'widgets/page',
	'widgets/layout',
	'widgets/rendering',
	'widgets/add-rendering-engine',
];

const general = structureItems([
	['widgets', structureItems(widgets)],
	'routing',

	'backend',
	['styles', structureItems(styles)],
]);
export const frontend = {
	id: 'frontend',
	children: general,
};
