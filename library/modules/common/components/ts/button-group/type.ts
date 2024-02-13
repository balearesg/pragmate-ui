export interface IProps {
	variant?: string;
	size?: 'small' | 'medium' | 'tall';
	orientation?: 'row' | 'column';
	children: React.ReactNode;
	selected: number;
	disabled?: boolean;
	disabledIndexes?: number[];
	index?: number;
}
