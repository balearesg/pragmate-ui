import React from 'react';
import { Header as DynamicHeader, useDynamicListContext } from 'pragmate-ui/dynamic-list';
export function Header() {
	const { values } = useDynamicListContext();

	return <DynamicHeader></DynamicHeader>;
}
