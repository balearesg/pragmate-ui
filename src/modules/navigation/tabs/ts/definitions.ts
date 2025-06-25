export interface IProps {
	children?: React.ReactNode;
	className?: string;
	items?: any;
}

export interface ITabProps extends IProps {
	disabled?: boolean;
	index?: number;
	name?: string;
}
export interface ITPane {
	tab: string;
	content: React.ReactNode;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export interface ITabsContainerProps extends IProps {
	active?: number;
	current: string;
	tabs: string[];
	onChange?: (event, index?) => void;
	className?: string;
	setURL?: boolean; // todo
	panes?: ITPane[];
	trackUrl: boolean;
}
