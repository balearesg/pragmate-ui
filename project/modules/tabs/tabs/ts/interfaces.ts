export type TPane = {
	tab: string;
	content: React.ReactNode;
};

export type ITabProps = {
	panes: TPane[];
	children: React.ReactNode;
	active?: number;
	setURL?: boolean;
	onChange?: (event, index) => void;
};
