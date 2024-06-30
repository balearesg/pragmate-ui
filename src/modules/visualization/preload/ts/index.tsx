import React from 'react';

export interface IPropsPreload {
	width?: string;
	height?: string;
	color?: string;
	stopAnimation?: boolean;
	radio?: string;
}

export /*bundle */ function Preload(props : IPropsPreload) {
	const { width, height, color, stopAnimation, radio } = props;

	return (
		<span
			className='pui-preload'
			style={{
				width: width || '100%',
				height: height || '14px',
				background: color || '',
				borderRadius: radio || '',
			}}
		>
			<span style={{ display: stopAnimation ? 'none' : 'block' }} />
		</span>
	);
}
