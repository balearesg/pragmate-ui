type ButtonProps = {
	className: string;
	label: string;
	onClick: () => void;
};

export interface IAlertModalProps {
	text?: string;
	title?: string;
	className?: string;
	onConfirm: () => void | Promise<void>;
	onClose: () => void;
	/**
	 * @deprecated
	 */
	btn: ButtonProps;
	buttonLabel: string;
	button?: ButtonProps;
	centered?: boolean;
	children?: React.ReactNode;
}
