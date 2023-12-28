export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, DefaultSizing {
	data?: Record<string, any>;
	label?: React.ReactNode;
	children?: React.ReactNode;
	icon?: string;
	loading?: boolean;
	fetching?: boolean;
	variant?: string;
	bordered?: boolean;
	disabled?: boolean;
	block?: boolean;
	index?: number;
	title?: string;
}

interface DefaultSizing {
	sizing?: 'sm' | 'md' | 'lg';
}
