import React from 'react';
import { Palette } from './palette';
import { Input } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';
import { Palettes } from './palettes';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';
import { ColorControl } from './ColorControl';
import { AllCustomProperties } from './AllCustomProperties';
import type { StoreManager } from '../store';
import { ColorPalette } from './ColorPalette';
export /*bundle*/
function View({ store }: { store: StoreManager }) {
	const [colors, setColors] = React.useState(store.tones);
	useBinder([store], () => {
		setColors({ ...store.tones });
	});

	const onSubmit = event => {
		event.preventDefault();
		store.generatePalettes();
	};

	// return <ColorPalette />;
	return (
		<div className='page__container'>
			<h2>Template tones</h2>
			<form className='form__color__container' onSubmit={onSubmit}>
				<ColorControl store={store} label='Primary' name='primary' value={colors.primary} />
				<ColorControl store={store} label='Secondary' name='secondary' value={colors.secondary} />
				<ColorControl store={store} label='Tertiary' name='tertiary' value={colors.tertiary} />
				<ColorControl store={store} label='Success' name='success' value={colors.success} />
				<ColorControl store={store} label='Info' name='info' value={colors.info} />
				<ColorControl store={store} label='Warning' name='warning' value={colors.warning} />
				<ColorControl store={store} label='Error' name='error' value={colors.error} />
				<Button variant='primary' onClick={onSubmit}>
					Generate
				</Button>
			</form>
			<Palettes store={store} />
			<AllCustomProperties store={store} />
		</div>
	);
}
