export interface IMenuItem {
	id: string;
	label: string;
	children?: Object[];
	link?: String;
}

export interface IProps {
	items: IMenuItem[];
	className?: string;
	level?: number;
}
