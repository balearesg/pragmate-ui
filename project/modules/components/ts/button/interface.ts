export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	data?: Record<string, any>;
	label?: React.ReactNode;
	children?: React.ReactNode;
	icon?: string;
	loading?: boolean;
	fetching?: boolean;
	variant?: string;
	bordered?: boolean;
	disabled?: boolean;
	title?: string;
}
