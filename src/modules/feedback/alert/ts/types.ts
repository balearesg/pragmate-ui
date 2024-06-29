import { IPUIProps } from 'pragmate-ui/base';

export interface IProps extends Omit<IPUIProps<IProps>, 'icon'> {
	show?: boolean;
	className?: string;
	type?: string;
	message?: string;
	title?: string;
	closable?: boolean;
	onClose?: () => boolean | Promise<boolean>;
	children?: React.ReactNode;
	icon?: boolean | string;
}

export interface IIconMap {
	[key: string]: string;
}

export type AlertAttributes = {
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
	className: string;
};

export /*bundle*/ enum ITypes {
	Error = 'error',
	Warning = 'warning',
	Success = 'success',
	Info = 'info',
}

export /*bundle*/ const IAlertTypes = ITypes;
