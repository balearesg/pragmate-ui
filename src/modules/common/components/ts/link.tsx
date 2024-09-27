import React from 'react';
import { routing } from '@beyond-js/kernel/routing';

interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void | boolean;
}
export /*bundle*/
function Link({ href, ...props }: ILinkProps): JSX.Element {
	const isExternal = props.target === '_blank';

	const onClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
		if (!isExternal) event.preventDefault();
		event.stopPropagation();

		if (props.onClick && typeof props.onClick === 'function') {
			const result = props.onClick(event);
			if (result === false) return;
		}

		!isExternal && routing.pushState(href);
	};

	const properties = { ...props };
	['href', 'onClick'].forEach(prop => delete properties[prop]);

	return (
		<a {...properties} href={href} onClick={onClick} target={props.target}>
			{props.children}
		</a>
	);
}
