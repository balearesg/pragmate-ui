import React from 'react';
import { IItemListProps } from '../definitions';
import { getAttributes } from '../html-attributes';

interface IHTMLItemProps {
	as?: keyof React.ReactHTML;
	children?: React.ReactNode;
}

export function HTMLItem({ as = 'li', children, ...props }: IHTMLItemProps & Record<string, any>) {
	const Control = as;
	const { item } = props;
	const attrs = getAttributes(props, ['item', 'data']);

	return <Control {...attrs}>{item}</Control>;
}
