import React from 'react';
import { hexToRgb1, rgbToHex, hexToHsl, hexToRgb, hslToHex } from 'pragmate-ui-docs/template/manager';
console.log(0.1, hexToRgb1, rgbToHex, hexToHsl, hexToRgb, hslToHex, rgbToHex);
export function Box({ color, to }) {
	const types = {
		hsl: () => {
			const tone = hexToHsl(color);
			return `hsl(${tone.h} ${tone.s}% ${tone.l}%)`;
		},
		rgb: () => {
			const tone = hexToRgb(color);
			return `rgb(${tone.r}, ${tone.g}, ${tone.b})`;
		},
		rgb1: () => {
			const tone = hexToRgb1(color);
			return `rgb(${tone.r}, ${tone.g}, ${tone.b})`;
		},
	};
	console.log(10, to);
	const toUse = ![undefined].includes(to) ? types[to](color) : color;
	return (
		<div
			className='box-color-container'
			style={{
				backgroundColor: toUse,
			}}
		>
			{toUse}
		</div>
	);
}
export function ConverterView() {
	return (
		<div className='page__container'>
			<h1>Converter view</h1>
			<Box color='#ff0000' to='hsl' />
			<Box color='#ff0000' to='rgb' />
			<Box color='#ff0000' to='rgb1' />
			<Box color='#ff0000' />
		</div>
	);
}
