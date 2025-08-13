import React from 'react';

interface IProps {
	children: React.ReactNode;
	content: string | React.ReactNode;
	placement?: string;
	settings?: any;
}

export /*bundle*/ function Tooltip({children, content, placement = 'top', settings = {}}: IProps) {
	const ref = React.useRef<HTMLSpanElement>(null);
	const [showTooltip, setShowTooltip] = React.useState(false);
	
	const placements: string[] = [
		'top',
		'top-start',
		'top-end',
		'right',
		'right-start',
		'right-end',
		'bottom',
		'bottom-start',
		'bottom-end',
		'left',
		'left-start',
		'left-end',
		'auto',
		'auto-start',
		'auto-end',
	];

	if (!placements.includes(placement)) placement = 'top';

	const handleMouseEnter = () => {
		setShowTooltip(true);
	};

	const handleMouseLeave = () => {
		setShowTooltip(false);
	};

	const getTooltipPosition = () => {
		switch (placement) {
			case 'top':
				return { top: '-40px', left: '50%', transform: 'translateX(-50%)' };
			case 'bottom':
				return { bottom: '-40px', left: '50%', transform: 'translateX(-50%)' };
			case 'left':
				return { left: '-120px', top: '50%', transform: 'translateY(-50%)' };
			case 'right':
				return { right: '-120px', top: '50%', transform: 'translateY(-50%)' };
			default:
				return { top: '-40px', left: '50%', transform: 'translateX(-50%)' };
		}
	};

	return (
		<div style={{ position: 'relative', display: 'inline-block' }}>
			<span 
				ref={ref} 
				className="pui-tooltip"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{children}
			</span>
			{showTooltip && content && (
				<div 
					className="floating-ui-tooltip"
					style={{
						position: 'absolute',
						zIndex: 9999,
						...getTooltipPosition()
					}}
				>
					{content}
				</div>
			)}
		</div>
	);
}
