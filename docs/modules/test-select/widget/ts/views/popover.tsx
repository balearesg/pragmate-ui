import React from 'react';
import { usePopper } from 'react-popper';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface IPopoverProps {
	isOpen: boolean;
	triggerRef: React.RefObject<HTMLElement>;
	children: ReactNode;
}

export const Popover = ({ isOpen, triggerRef, children }: IPopoverProps) => {
	const popperRef = useRef<HTMLDivElement>(null);
	const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(triggerRef.current, popperElement, {
		placement: 'bottom-start',
	});

	useEffect(() => {
		if (isOpen && popperRef.current) {
			setPopperElement(popperRef.current);
		}
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div ref={popperRef} style={styles.popper} {...attributes.popper}>
			{children}
		</div>
	);
};
