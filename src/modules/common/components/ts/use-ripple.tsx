import React from 'react';
import { RippleEffect } from 'pragmate-ui/ripple';

export function useRipple(title: string, ref?: React.RefObject<HTMLButtonElement>): React.RefObject<HTMLButtonElement> {
	ref = ref ?? React.useRef<HTMLButtonElement>(null);

	React.useEffect(() => {
		const ripple = new RippleEffect();
		ripple.addRippleEffect(ref.current);
	}, [title]);

	return ref;
}

// Hook separado para el tooltip que retorna el JSX del tooltip
export function useTooltip(title: string, ref?: React.RefObject<HTMLElement>) {
	const [isVisible, setIsVisible] = React.useState(false);
	const [placement, setPlacement] = React.useState('top');

	React.useEffect(() => {
		if (!title || !ref?.current) return;

		const element = ref.current;

		// Leer el atributo data-placement del elemento
		const dataPlacement = element.getAttribute('data-placement');
		if (dataPlacement) {
			setPlacement(dataPlacement);
		}

		const handleMouseEnter = () => {
			setIsVisible(true);
		};

		const handleMouseLeave = () => {
			setIsVisible(false);
		};

		element.addEventListener('mouseenter', handleMouseEnter);
		element.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			element.removeEventListener('mouseenter', handleMouseEnter);
			element.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [title, ref]);

	// Función para calcular la posición del tooltip basada en el placement
	const getTooltipPosition = (placement: string) => {
		switch (placement) {
			case 'top':
				return {
					top: '-40px',
					left: '50%',
					transform: 'translateX(-50%)',
					arrowTop: '100%',
					arrowLeft: '50%',
					arrowTransform: 'translateX(-50%)',
					arrowBorder: '4px solid transparent',
					arrowBorderTop: '4px solid #222',
				};
			case 'bottom':
				return {
					top: '100%',
					left: '50%',
					transform: 'translateX(-50%)',
					marginTop: '8px',
					arrowTop: '-8px',
					arrowLeft: '50%',
					arrowTransform: 'translateX(-50%)',
					arrowBorder: '4px solid transparent',
					arrowBorderBottom: '4px solid #222',
				};
			case 'left':
				return {
					top: '50%',
					left: '-100%',
					transform: 'translateY(-50%)',
					marginRight: '8px',
					arrowTop: '50%',
					arrowLeft: '100%',
					arrowTransform: 'translateY(-50%)',
					arrowBorder: '4px solid transparent',
					arrowBorderLeft: '4px solid #222',
				};
			case 'right':
				return {
					top: '50%',
					left: '100%',
					transform: 'translateY(-50%)',
					marginLeft: '8px',
					arrowTop: '50%',
					arrowLeft: '-8px',
					arrowTransform: 'translateY(-50%)',
					arrowBorder: '4px solid transparent',
					arrowBorderRight: '4px solid #222',
				};
			default:
				return {
					top: '-40px',
					left: '50%',
					transform: 'translateX(-50%)',
					arrowTop: '100%',
					arrowLeft: '50%',
					arrowTransform: 'translateX(-50%)',
					arrowBorder: '4px solid transparent',
					arrowBorderTop: '4px solid #222',
				};
		}
	};

	const position = getTooltipPosition(placement);

	const tooltipJSX = isVisible ? (
		<div
			className="floating-ui-tooltip"
			style={{
				position: 'absolute',
				...position,
				zIndex: 9999,
			}}
		>
			{title}
			<div
				className="floating-ui-arrow"
				style={{
					position: 'absolute',
					top: position.arrowTop,
					left: position.arrowLeft,
					transform: position.arrowTransform,
					width: 0,
					height: 0,
					border: position.arrowBorder,
					...(position.arrowBorderTop && { borderTop: position.arrowBorderTop }),
					...(position.arrowBorderBottom && { borderBottom: position.arrowBorderBottom }),
					...(position.arrowBorderLeft && { borderLeft: position.arrowBorderLeft }),
					...(position.arrowBorderRight && { borderRight: position.arrowBorderRight }),
				}}
			/>
		</div>
	) : null;

	return { tooltipJSX, isVisible, placement };
}
