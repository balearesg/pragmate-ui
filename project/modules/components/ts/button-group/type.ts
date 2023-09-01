export interface IProps {
	variant?: string;
	size?: 'small' | 'medium' | 'tall';
	orientation?: 'row' | 'column';
	children: JSX.Element;
	selected: number;
}
