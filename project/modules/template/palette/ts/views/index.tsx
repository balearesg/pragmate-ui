import * as React from 'react';
import { Palette } from './palette';

export /*bundle*/
function View() {
	return (
		<div>
			<h2>Template tones</h2>
			<Palette property='primary' />
			<Palette property='secondary' />
			<Palette property='tertiary' />
		</div>
	);
}
