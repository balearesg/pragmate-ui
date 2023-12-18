import React, { ReactElement, ReactNode } from 'react';

type ListProps<T> = {
	items: T[];
	className?: string;
	index?: string;
	control: React.ElementType<{ data: T }>;
	container?: keyof JSX.IntrinsicElements;
};

export /*bundle */ function List<T>({
	items,
	className,
	index = 'id',
	control,
	container = 'ul'
}: ListProps<T>): ReactElement {
	const Container = container;
	const Control = control;

	// const output: ReactNode[] = items.map((data, idx) => {
	// 	return <Control key={(data as any)[index as string] || idx} data={data} />;
	// });

	const output: ReactNode[] = items.map((item, idx) => {
		return React.createElement(Control as React.ElementType<{ data: T; index: number }>, {
			key: (item as any)[index] || idx,
			index: idx,
			data: item
		});
	});

	return <Container className={className}>{output}</Container>;
}
