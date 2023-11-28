import React from 'react';
<<<<<<< HEAD
import {routing} from '@beyond-js/kernel/routing';
import {IProps} from './types';
import {useBinder} from '@beyond-js/react-18-widgets/hooks';
import {v4 as uuid} from 'uuid';
import {Item} from './item';

export /* bundle */ function BreadCrumb({items, border, className, children, ...props}: IProps) {
	const [currentRouting, setCurrentRouting] = React.useState(routing.uri.pathname);

	useBinder([routing], () => setCurrentRouting(routing.uri.pathname));
	const breadcrumbOutput = items.map(([link, label]) => (
		<Item key={uuid()} link={link} label={label} currentRouting={currentRouting} />
	));

	let cls = `breadcrumb-page-header${className ? ` ${className}` : ''}`;
	if (border) cls += ' border-header';

	return (
		<header className={cls} {...props}>
			{breadcrumbOutput.length > 0 && <ul className="breadcrumb">{breadcrumbOutput}</ul>}
=======
import { routing } from '@beyond-js/kernel/routing';
import { IProps } from './types';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';
import { v4 as uuid } from 'uuid';
import { Item } from './item';

export /* bundle */ function BreadCrumb({ items, separator, className, children, ...props }: IProps) {
	const [currentRouting, setCurrentRouting] = React.useState(routing.uri.pathname);

	useBinder([routing], () => setCurrentRouting(routing.uri.pathname));
	const total = items.length;
	const breadcrumbOutput = items.map(([label, link], index) => (
		<Item
			key={uuid()}
			total={total}
			index={index}
			separator={separator}
			link={link}
			label={label}
			currentRouting={currentRouting}
		/>
	));

	let cls = `pui-breadcrumb__container${className ? ` ${className}` : ''}`;

	return (
		<header className={cls} {...props}>
			{breadcrumbOutput.length > 0 && <ul className='breadcrumb'>{breadcrumbOutput}</ul>}
>>>>>>> dev
			<div>{children}</div>
		</header>
	);
}
