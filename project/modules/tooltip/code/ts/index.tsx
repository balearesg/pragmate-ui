import React from 'react';

interface ITooltipProps {
	children: React.ReactNode;
	text: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
}

export /*bundle*/ const Tooltip = ({ children, text, position = 'bottom' }: ITooltipProps) => {
	const [showTooltip, setShowTooltip] = React.useState(false);

	const handleMouseEnter = () => setShowTooltip(true);
	const handleMouseLeave = () => setShowTooltip(false);
	const cls = `tooltip ${position} ${showTooltip ? 'visible' : ''}`;

	return (
		<div className='tooltip-container' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
			{/* {React.cloneElement(children, {
				onMouseEnter: () => handleMouseEnter(),
				onMouseLeave: () => handleMouseLeave(),
			})} */}
			{children}
			<div className={cls}>{text}</div>
		</div>
	);
};
