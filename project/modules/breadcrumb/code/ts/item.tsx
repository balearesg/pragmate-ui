import React from 'react';
import { Link } from 'pragmate-ui/components';
import { IItem } from './types';

export function Item({ link, label, currentRouting }: IItem) {
	const isChecked = link === currentRouting ? 'breadcrumbs__item--checked' : 'breadcrumbs__item';

	return (
		<li key={`${link} ${label}`}>
			<Link className={isChecked} href={link}>
				{label}
			</Link>
		</li>
	);
}
