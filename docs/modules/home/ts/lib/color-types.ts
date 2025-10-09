export interface IColorShade {
	name: string;
	hex: string;
	rgb: string;
	hsl: string;
}

export interface IColorSystem {
	primary: IColorShade[];
	secondary: IColorShade[];
	tertiary: IColorShade[];
	neutral: IColorShade[];
	success: IColorShade[];
	warning: IColorShade[];
	error: IColorShade[];
}

export interface IColorManager {
	primaryColor: string;
	secondaryColor: string;
	tertiaryColor: string;
	neutralColor: string;
	colorSystem: IColorSystem | null;
}
