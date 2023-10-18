import React from 'react';
import {routing} from '@beyond-js/kernel/routing';

export /*bundle*/
function Link({href, ...props}: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element {
	const isExternal = props.target === '_blank';

	const onClick = async (event: React.MouseEvent<HTMLAnchorElement>): Promise<void> => {
		if (isExternal) return;

		event.preventDefault();
		event.stopPropagation();

		if (props.onClick && typeof props.onClick === 'function') {
			await props.onClick(event);
		}
		if (href) routing.pushState(href);
	};

	const properties = {...props};
	['href', 'onClick'].forEach(prop => delete properties[prop]);

	return (
		<a {...properties} href={href} onClick={onClick} target={props.target}>
			{props.children}
		</a>
	);
}
