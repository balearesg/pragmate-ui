export interface IProps {
	variant?: string;
	size?: 'small' | 'medium' | 'tall';
	orientation?: 'row' | 'column';
	children: React.ReactNode;
	selected: number;
	index?: number;
}
