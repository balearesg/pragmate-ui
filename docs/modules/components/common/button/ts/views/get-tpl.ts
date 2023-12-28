import { objectToString } from '../utils';
export const getTpl = attrs => {
	const attributes = objectToString(attrs);

	return `<Button ${attributes}>Click me!</Button>`;
};
