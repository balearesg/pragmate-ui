import React from 'react';
import { Link } from 'pragmate-ui/components';
import { IItem } from './types';

export function Item({ link, label, currentRouting, index, total, separator = '>' }: IItem) {
	const isChecked = link === currentRouting ? 'breadcrumb__item--current' : 'breadcrumb__item';

	return (
		<li key={`${link} ${label}`} className="pui-breadcrumb-item__container">
			<Link className={isChecked} href={link}>
				{label}
				{total > index + 1 && <span className='pui-breadcrumb__separator'>{separator}</span>}
			</Link>
		</li>
	);
}
