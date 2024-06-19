import { SyntheticEvent, ReactNode } from 'react';

export /*bundle*/ interface IModalProps {
	children: ReactNode;
	className?: string;
	onClose?: (e: SyntheticEvent<HTMLElement, Event>) => void;
	show?: boolean;
	closeClicked?: boolean;
	closeBackdrop?: boolean;
}

export interface IModalState {
	container?: HTMLDivElement;
	show: boolean;
	closeClicked: boolean;
}
