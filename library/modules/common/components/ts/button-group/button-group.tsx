import React from 'react';
import type { IProps } from './type';
import { ButtonGroupContext } from './context';

export /*bundle*/ function ButtonGroup({ orientation = 'row', children, disabledIndexes = [0], ...props }: IProps): JSX.Element {
    const [selected, setSelected] = React.useState<number>(props.selected);
    let cls = `pui-button-group`;
    cls += orientation ? ` pui-button-group ${orientation}` : '';

    const childrenWithProps = React.Children.map(children, (child, index) => {
		let elementIndex = index + 1;
        if (React.isValidElement(child)) {
            const childDisabled = disabledIndexes.includes(elementIndex);
            return React.cloneElement(child, { index, disabled: childDisabled } as IProps); 
        }
    });

    return (
        <ButtonGroupContext.Provider value={{ selected, setSelected }}>
            <div className={cls}>{childrenWithProps}</div>
        </ButtonGroupContext.Provider>
    );
}
