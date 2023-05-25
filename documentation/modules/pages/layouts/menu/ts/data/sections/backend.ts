import { structureItems } from '../structure-item';

const general = structureItems(['backend/intro', 'backend/bridges', 'backend/bee', 'backend/ssr']);
export const backend = {
	id: 'backend',
	children: general,
};
