export /*bundle */ function hexToRgb1(hex: string): { r: number; g: number; b: number } {
	// Remove the '#' symbol if present
	hex = hex.replace(/^#/, '');

	// Convert the hexadecimal values to decimal
	const bigint = parseInt(hex, 16);

	// Extract the RGB components
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	return { r, g, b };
}

export /*bundle */ function rgbToHex(r: number, g: number, b: number): string {
	return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export /*bundle */ function hslToHex(h, s, l) {
	l /= 100;
	const a = (s * Math.min(l, 1 - l)) / 100;
	const f = n => {
		const k = (n + h / 30) % 12;
		const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return Math.round(255 * color)
			.toString(16)
			.padStart(2, '0'); // convert to Hex and prefix "0" if needed
	};
	return `#${f(0)}${f(8)}${f(4)}`;
}

type RGBColor = {
	r: number; // Rango: 0-255
	g: number; // Rango: 0-255
	b: number; // Rango: 0-255
};

type HSLColor = {
	h: number; // Hue, en grados: 0-360
	s: number; // Saturación, en porcentaje: 0-100
	l: number; // Luminosidad, en porcentaje: 0-100
};

export /*bundle */ function rgbToHsl(rgb: RGBColor): HSLColor {
	let r = rgb.r / 255;
	let g = rgb.g / 255;
	let b = rgb.b / 255;

	let max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	let h,
		s,
		l = (max + min) / 2;

	if (max === min) {
		h = s = 0; // Achromatic
	} else {
		let d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export /*bundle */ function hexToRgb(hex: string): RGBColor {
	let r: number = 0,
		g: number = 0,
		b: number = 0;

	// Si es un color hexadecimal de tres caracteres
	if (hex.length === 4) {
		r = parseInt(hex[1] + hex[1], 16);
		g = parseInt(hex[2] + hex[2], 16);
		b = parseInt(hex[3] + hex[3], 16);
	}
	// Si es un color hexadecimal de seis caracteres
	else if (hex.length === 7) {
		r = parseInt(hex.slice(1, 3), 16);
		g = parseInt(hex.slice(3, 5), 16);
		b = parseInt(hex.slice(5, 7), 16);
	}

	return { r, g, b };
}

export /*bundle */ function hexToHsl(hex: string): HSLColor {
	const rgb = hexToRgb(hex);
	return rgbToHsl(rgb);
}
