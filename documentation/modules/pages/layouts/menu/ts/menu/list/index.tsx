import * as React from 'react';
import { IProps } from '../interfaces';
import { MenuItem } from '../items';

export function List({ items, className, level }: IProps) {
	const output = items.map((item, i) => <MenuItem item={item} key={`${item.id}.${i}`} />);
	const clsToApply = level ? 'docs__menu__sublist' : 'docs__menu__list';
	const cls = `${clsToApply}${className ? ` ${className}` : ''}`;

	return <ul className={cls}>{output}</ul>;
}
