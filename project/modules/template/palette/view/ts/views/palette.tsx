import * as React from 'react';
import { TplManager, hslToHex } from 'pragmate-ui/template/manager';
import { Tooltip } from 'pragmate-ui/tooltip';
import { Code } from 'pragmate-ui/code';
import type { StoreManager } from '../store';
interface PaletteComponentProps {
	property: string;
	store: StoreManager;
}
globalThis.tplManager = TplManager;

export const Palette: React.FC<PaletteComponentProps> = ({ property, store }) => {
	const values = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '95', '98', '100'];
	const item = store.colors.get(property);

	if (!item) return null;
	const variables = item
		.map((value, index) => {
			console.log(0.1, value, property);
			return `--${property}-${values[index]}: ${value};`;
		})
		.join('\n');

	return (
		<>
			<div className={`palette-container palette-${property}`}>
				{item.map(value => {
					const color = value;

					return (
						<Tooltip content={color}>
							<div
								key={`${property}.${value}`}
								className={`palette__color-container color-${value}`}
								style={{ backgroundColor: value }}
							>
								{value}
							</div>
						</Tooltip>
					);
				})}
			</div>
			<div>
				<Code language='css'>{variables}</Code>
			</div>
		</>
	);
};
