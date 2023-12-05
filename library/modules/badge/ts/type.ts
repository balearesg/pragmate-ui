export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'default';
	dot: boolean;
	value: string | number;
	visible: boolean;
	sizing: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
