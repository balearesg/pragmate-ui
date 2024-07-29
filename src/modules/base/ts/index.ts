export /* bundle */ interface IPUIProps<T = unknown> extends React.HTMLAttributes<T> {
	/**
	 * @deprecated
	 */
	type?: string;
	title?: string;
	children?: React.ReactNode;
	variant?: Variant;
}

export type Variant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'error' | 'warning' | 'default';
