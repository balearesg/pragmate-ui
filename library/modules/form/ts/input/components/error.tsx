import React from 'react';
import { useInputContext } from '../context';

export /*bundle*/ function Error({
	show,
	message,
	className,
	children,
}: {
	show: boolean;
	message?: string;
	className?: string;
	children?: React.ReactNode;
}) {
	const { value } = useInputContext();

	if (!show) return null;
	const cls = `pui-input-error-label${className ? ` ${className}` : ''}`;
	return (
		<span className={cls}>
			{message} {children}
		</span>
	);
}
