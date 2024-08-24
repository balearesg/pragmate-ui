export type PuiIcon = string | { viewBox: string; icon: string; name?: string };
export /*bundle*/ interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	data?: Record<string, any>;
	label?: React.ReactNode;
	children?: React.ReactNode;
	icon?: PuiIcon;
	loading?: boolean;
	type?: 'button' | 'submit' | 'reset';
	fetching?: boolean;
	variant?: string;
	bordered?: boolean;
	sizing?: 'sm' | 'md' | 'lg' | 'xs';
	disabled?: boolean;
	block?: boolean;
	index?: number;
	title?: string;
}
