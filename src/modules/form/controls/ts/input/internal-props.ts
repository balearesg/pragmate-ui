/**
 * Internal props of the input component.
 * This array is used to filter the props passed to the input component.
 */
export const internalProps = [
	'className',
	'hasError',
	'errorMessage',
	'children',
	'icon',
	'label',
	'password',
	'loading',
	'variant',
	'type',
	'size',
	'loading',
	'error',
	'sources',
	'onError',
];

function generateAttributes(attrs, toRemove = []) {
	const propsToRemove = [...internalProps, ...toRemove];
	const properties = { ...attrs };
	propsToRemove.forEach(prop => delete properties[prop]);

	return properties;
}
