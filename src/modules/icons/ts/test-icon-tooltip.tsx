import React from 'react';
import { Icon } from './icon';

export function TestIconTooltip() {
	return (
		<div style={{ padding: '50px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
			<div>
				<Icon
					icon="home"
					title="Icono de casa (tooltip arriba por defecto)"
					style={{ width: '24px', height: '24px' }}
				/>
			</div>

			<div>
				<Icon
					icon="user"
					title="Icono de usuario (tooltip abajo)"
					data-placement="bottom"
					style={{ width: '24px', height: '24px' }}
				/>
			</div>

			<div>
				<Icon
					icon="settings"
					title="Icono de configuración (tooltip izquierda)"
					data-placement="left"
					style={{ width: '24px', height: '24px' }}
				/>
			</div>

			<div>
				<Icon
					icon="search"
					title="Icono de búsqueda (tooltip derecha)"
					data-placement="right"
					style={{ width: '24px', height: '24px' }}
				/>
			</div>
		</div>
	);
}
