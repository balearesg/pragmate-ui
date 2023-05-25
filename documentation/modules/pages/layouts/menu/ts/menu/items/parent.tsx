import * as React from 'react';
import { useMenuContext } from '../context';
import { routing } from '@beyond-js/kernel/routing';
import { AppIcon } from '@beyond/docs/ui/icons';
import { Sublist } from './sublist';

export function ParentItem({ item }) {
	const { texts, current } = useMenuContext();
	const onClick = (event: MouseEvent<HTMLElement>) => {
		event.preventDefault();
		const target = event.currentTarget as Element;
		target.closest('li')?.classList.toggle('item--opened');
	};

	const label = texts[item.id] ?? item.id;
	const selected = item.children.find(item => `/docs/${item.id}` === current.uri);
	const cls = `menu__item--parent${!!selected ? ' item--opened' : ''}`;

	return (
		<li className={cls}>
			<section onClick={onClick}>
				<a href="">
					<span>{label}</span>
				</a>
				<AppIcon icon="chevronRight" />
			</section>
			<Sublist items={item.children} level={1} />
		</li>
	);
}
