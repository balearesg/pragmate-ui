import { structureItems } from '../structure-item';

const packages = [
	'packages/create',
	'packages/types',
	'packages/distributions',
	'packages/json',
	'packages/publish',
	'packages/beyondjs',
	'packages/dependencies',
	'deployment',
];
const modules = ['modules/introduction', 'modules/creation', 'modules/bundles', 'modules/processors'];

const general = structureItems([
	['packages', structureItems(packages)],
	['modules', structureItems(modules)],
]);
export const basics = {
	id: 'concepts',
	children: general,
};
