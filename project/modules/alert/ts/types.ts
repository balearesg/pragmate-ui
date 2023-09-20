export interface IProps {
	show?: boolean;
	className?: string;
	type?: ITypes;
	message?: string;
	title?: string;
	closable?: boolean;
	onClose?: () => boolean | Promise<boolean>;
	children?: React.ReactNode;
	icon?: boolean | string;
}

export /*bundle*/ enum ITypes {
	Error = 'error',
	Warning = 'warning',
	Success = 'success',
	Info = 'info',
}

export type IiconMap = {
	[key: string]: string;
};
