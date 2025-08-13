import React from 'react';

// list-box.tsx
import { useListBox, useOption, AriaListBoxOptions } from 'react-aria';
import { useListState } from 'react-stately';
import { useRef } from 'react';

interface IListBoxProps extends AriaListBoxOptions<any> {}

export const ListBox = (props: IListBoxProps & { children?: React.ReactNode; state?: any }) => {
	const { children, state, ...listBoxProps } = props;
	const ref = useRef(null);
	const { listBoxProps: ariaListBoxProps } = useListBox(listBoxProps, state, ref);

	return (
		<ul {...ariaListBoxProps} ref={ref} style={{ padding: 0, margin: 0, listStyle: 'none' }}>
			{children}
		</ul>
	);
};

function Option({ item, state }: any) {
	const ref = useRef(null);
	const { optionProps, isSelected, isFocused } = useOption({ key: item.key }, state, ref);

	return (
		<li
			{...optionProps}
			ref={ref}
			style={{
				padding: '0.5rem 1rem',
				backgroundColor: isFocused ? '#eee' : isSelected ? '#ddd' : 'transparent',
				cursor: 'pointer',
			}}
		>
			{item.rendered}
		</li>
	);
}
