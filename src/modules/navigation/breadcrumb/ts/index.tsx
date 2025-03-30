import React from 'react';
import { v4 as uuid } from 'uuid';
import { Item } from './item';
import { IProps } from './types';

export /* bundle */ function BreadCrumb({ items, separator = '/', className, children, ...props }: IProps) {
	const total = items.length;
	const breadcrumbOutput = items.map(([label, link], index) => (
		<Item
			key={uuid()}
			total={total}
			index={index}
			separator={separator}
			link={link}
			label={label}
			last={total === index + 1}
		/>
	));

	let cls = `pui-breadcrumb__container${className ? ` ${className}` : ''}`;

	return (
		<div className={cls} {...props}>
			{breadcrumbOutput.length > 0 && <ul className="pui-breadcrumb">{breadcrumbOutput}</ul>}
			{children && <div>{children}</div>}
		</div>
	);
}
