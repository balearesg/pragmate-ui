import React from 'react';
import { Link } from 'pragmate-ui/components';
import { IItem } from './types';

export function Item({ link, label, onClick, currentRouting, index, total, separator = '>' }: IItem) {
	const isChecked = link === currentRouting ? 'breadcrumb__item--current' : 'breadcrumb__item';
	const isFunction = typeof link === 'function';
	const attrs = {} as Partial<React.AllHTMLAttributes<HTMLAnchorElement>>;
	if (isFunction) {
		attrs.onClick = onClick;
	} else {
		attrs.href = link;
	}

	return (
		<li key={`${link} ${label}`} className='pui-breadcrumb-item__container'>
			<Link className={isChecked} {...attrs}>
				{label}
				{total > index + 1 && <span className='pui-breadcrumb__separator'>{separator}</span>}
			</Link>
		</li>
	);
}
