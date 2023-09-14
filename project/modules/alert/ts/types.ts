export interface IProps {
	show?: boolean;
	className?: string;
	type?: string;
	message?: string;
	title?: string;
	closable?: boolean;
	onClose?: () => boolean;
	children?: React.ReactNode;
	icon?: boolean | string;
}

export type IiconMap = {
	[key: string]: string;
};
