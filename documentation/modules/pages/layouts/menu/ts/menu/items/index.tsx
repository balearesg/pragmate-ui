import * as React from 'react';
import { useMenuContext } from '../context';
import { routing } from '@beyond-js/kernel/routing';
import { AppIcon } from '@beyond/docs/ui/icons';
import { ParentItem } from './parent';

export function MenuItem({ item }) {
	const { close, texts, current } = useMenuContext();
	if (item.children) return <ParentItem item={item} />;

	const uri = `/docs/${item.id}`;
	//@ts-ignore
	const onClick = event => {
		event.preventDefault();
		const currentTarget = event.currentTarget as Element;
		const container = currentTarget.closest('aside');
		const target = currentTarget.closest('li');
		const currentActive = container.querySelector('.active-item');
		if (currentActive) currentActive.classList.remove('active-item');
		target.classList.add('active-item');

		routing.pushState(uri);
		close();
	};

	const cls = `${uri === current.uri ? 'active-item' : ''}`;
	const link = `/docs/${item.id}`;

	const label = texts[link] ?? link;
	return (
		<li className={cls}>
			<a href={link} onClick={onClick}>
				{label}
			</a>
		</li>
	);
}
