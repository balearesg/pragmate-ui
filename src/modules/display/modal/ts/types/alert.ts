import { IPUIProps } from 'pragmate-ui/base';

type ButtonProps = {
	className: string;
	label: string;
	onClick: () => void;
};

export interface IAlertModalProps extends Omit<IPUIProps<IAlertModalProps>, 'variant'>{
	text?: string;
	onConfirm: () => void | Promise<void>;
	onClose: () => void;
	/**
	 * @deprecated
	 */
	btn?: ButtonProps;
	buttonLabel?: string;
	button?: ButtonProps;
	centered?: boolean;
}
