export /* bundle */ interface IPUIProps<T = unknown> extends React.InputHTMLAttributes<T> {
	show?: boolean;
	className?: string;
	type?: string;
	message?: string;
	title?: string;
	children?: React.ReactNode;
    variant?: TVariant;
    label?: string;
    icon?: string;
}

export type TVariant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'error' | 'warning';