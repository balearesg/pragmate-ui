export interface IChipProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	title?: string;
	variant?: string;
	icon?: string;
	/**
	 * @deprecated
	 */
	type?: string;
}

export interface IChipContainerProps {}
