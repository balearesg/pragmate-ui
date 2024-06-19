import { GENERAL_ICONS } from './list';
import { MEDIA_ICONS } from './media';

export /*bundle*/ const PRAGMATE_ICONS = { ...GENERAL_ICONS, ...MEDIA_ICONS };

export /*bundle */ const register = icons => {
	const keys = Object.keys(icons);
	keys.forEach(key => {
		PRAGMATE_ICONS[key] = icons[key];
	});
};
