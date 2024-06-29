import { IPUIProps } from 'pragmate-ui/base';
import { SyntheticEvent } from 'react';

export /*bundle*/ interface IModalProps extends Omit<IPUIProps<IModalProps>, 'variant'> {
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
