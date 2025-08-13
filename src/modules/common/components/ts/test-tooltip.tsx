import React from 'react';
import { useRipple, useTooltip } from './use-ripple';

export function TestTooltip() {
	const ref1 = useRipple('', React.useRef<HTMLButtonElement>(null));
	const ref2 = useRipple('', React.useRef<HTMLButtonElement>(null));
	const ref3 = useRipple('', React.useRef<HTMLButtonElement>(null));
	const ref4 = useRipple('', React.useRef<HTMLButtonElement>(null));

	const { tooltipJSX: tooltip1 } = useTooltip('Tooltip arriba (default)', ref1);
	const { tooltipJSX: tooltip2 } = useTooltip('Tooltip abajo', ref2);
	const { tooltipJSX: tooltip3 } = useTooltip('Tooltip izquierda', ref3);
	const { tooltipJSX: tooltip4 } = useTooltip('Tooltip derecha', ref4);

	return (
		<div style={{ padding: '50px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
			<div style={{ position: 'relative', display: 'inline-block' }}>
				<button ref={ref1} style={{ padding: '10px', margin: '20px' }}>
					Hover para tooltip arriba
				</button>
				{tooltip1}
			</div>

			<div style={{ position: 'relative', display: 'inline-block' }}>
				<button ref={ref2} style={{ padding: '10px', margin: '20px' }} data-placement="bottom">
					Hover para tooltip abajo
				</button>
				{tooltip2}
			</div>

			<div style={{ position: 'relative', display: 'inline-block' }}>
				<button ref={ref3} style={{ padding: '10px', margin: '20px' }} data-placement="left">
					Hover para tooltip izquierda
				</button>
				{tooltip3}
			</div>

			<div style={{ position: 'relative', display: 'inline-block' }}>
				<button ref={ref4} style={{ padding: '10px', margin: '20px' }} data-placement="right">
					Hover para tooltip derecha
				</button>
				{tooltip4}
			</div>
		</div>
	);
}
