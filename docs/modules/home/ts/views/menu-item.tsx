import * as React from 'react';
import { Link } from 'pragmate-ui/components';

interface IMenuItemProps {
	name: string;
	isActive: boolean;
	onSelect: (name: string) => void;
}

export function MenuItem({ name, isActive, onSelect }: IMenuItemProps): JSX.Element {
	const className = isActive ? 'active' : '';
	const href = `/?control=${name}`;
	const label = name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1');

	const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		onSelect(name);
	};

	return (
		<li className={className}>
			<Link href={href} onClick={onClick}>
				{label}
			</Link>
		</li>
	);
}
