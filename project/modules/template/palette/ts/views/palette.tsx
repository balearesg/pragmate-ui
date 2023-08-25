import * as React from 'react';
import { TplManager, hslToHex } from 'pragmate-ui/template/manager';
import { Tooltip } from 'pragmate-ui/tooltip';
interface PaletteComponentProps {
	property: string;
}
globalThis.tplManager = TplManager;
export const Palette: React.FC<PaletteComponentProps> = ({ property }) => {
	const values = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '95', '98', '100'];

	function extractHSLValues(hslString: string): number[] | null {
		const match = hslString.match(/hsl\((\d+(\.\d+)?)\s*,\s*(\d+(\.\d+)?)%\s*,\s*(\d+(\.\d+)?)%\)/);

		if (match && match.length >= 4) {
			const hue = parseFloat(match[1]);
			const saturation = parseFloat(match[3]);
			const lightness = parseFloat(match[5]);

			return [hue, saturation, lightness];
		} else {
			return null; // Invalid HSL string format
		}
	}

	return (
		<div className={`palette-container palette-${property}`}>
			{values.map(value => {
				console.log(extractHSLValues(TplManager.root[`${property}${value}`]));
				const color = hslToHex(...extractHSLValues(TplManager.root[`${property}${value}`]));
				return (
					<Tooltip content={color}>
						<div
							key={value}
							className={`palette__color-container color-${value}`}
							style={{ backgroundColor: `var(--${property}-${value})` }}
						>
							{value}
						</div>
					</Tooltip>
				);
			})}
		</div>
	);
};
