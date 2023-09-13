import * as React from 'react';
import { Link } from 'pragmate-ui/components';
import { routing } from '@beyond-js/kernel/routing';
import { IProps } from './types';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';

export /* bundle */ function BreadCrumb({ items, border, className, children }) {
	let cls = `breadcrumb-page-header${className ? ` ${className}` : ''}`;
	if (border) cls += ' border-header';

	const [currentRouting, setCurrentRouting] = React.useState(routing.uri.pathname);

	useBinder([routing], () => setCurrentRouting(routing.uri.pathname));

	let breadcrumbOutput = [];

	if (items) {
		breadcrumbOutput = items.map(([link, label]) => {
			const isChecked = link === routing.uri.pathname ? 'breadcrumbs__item--checked' : 'breadcrumbs__item';

			return (
				<li key={`${link} ${label}`}>
					<Link className={isChecked} href={link}>
						{label}
					</Link>
				</li>
			);
		});
	}

	return (
		<header className={cls}>
			{breadcrumbOutput.length > 0 && <ul className='breadcrumb'>{breadcrumbOutput}</ul>}
			<div>{children}</div>
		</header>
	);
}
