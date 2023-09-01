import * as React from 'react';
import type { IProps } from './type';
import { ButtonGroupContext } from './context';

export /* bundle */ function ButtonGroup(props: IProps): JSX.Element {
	const { orientation = 'row', children } = props;
	const [selected, setSelected] = React.useState<number>(props.selected);
	let cls = `pui-button-group`;
	cls += orientation ? ` pui-button-group ${orientation}` : '';

	const childrenWithProps = React.Children.map(children, (child, index) => {
		return React.cloneElement(child, { index }); // Passing the index as a prop
	});

	return (
		<ButtonGroupContext.Provider value={{ selected, setSelected }}>
			<div className={cls}>{childrenWithProps}</div>
		</ButtonGroupContext.Provider>
	);
}
