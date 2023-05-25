import * as React from 'react';
import { useMenuContext } from '../context';
import { routing } from '@beyond-js/kernel/routing';
import { AppIcon } from '@beyond/docs/ui/icons';
import { IProps } from './interfaces';
import { MenuItem } from './index';

export function Sublist({ items, className }: IProps) {
	const output = items.map((item, i) => <MenuItem item={item} key={`${item.id}.${i}`} />);
	const cls = `docs__menu__sublist${className ? ` ${className}` : ''}`;
	return <ul className={cls}>{output}</ul>;
}
