import React from 'react';
import { TplManager } from 'pragmate-ui/template/manager';
import type { StoreManager } from '../store';
import { Palette } from './palette';

interface PaletteComponentProps {
	property: string;
	store: StoreManager;
}
globalThis.tplManager = TplManager;

export const Palettes: React.FC<PaletteComponentProps> = ({ store }) => {
	const output = store.properties.map((tone, i) => {
		return <Palette key={`${tone}.${i}`} property={tone} store={store} />;
	});
	const output2 = store.tones.map((tone, i) => {
		return <Palette key={`${tone}.${i}`} property={tone} store={store} />;
	});

	return (
		<>
			{output} {output2}
		</>
	);
};
