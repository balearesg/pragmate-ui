export interface IProps {
	children?: React.ReactNode;
	className?: string;
}

export interface ITabProps extends IProps {
	disabled?: boolean;
	index?: number;
}
export interface ITPane {
	tab: string;
	content: React.ReactNode;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export interface ITabsContainerProps extends IProps {
	active?: boolean;
	onChange?: (event, index) => void;
	className?: string;
	setURL?: boolean; // todo
	panes: ITPane[];
}
