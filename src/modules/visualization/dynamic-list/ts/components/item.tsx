import React from 'react';
import { useDynamicListContext } from '../context';
import { IconButton } from 'pragmate-ui/icons';

export /*bundle */ function DynamicItem(props) {
	const { children, index, identifier } = props;
	const { removeItem, draggable, Item, registerRef } = useDynamicListContext();

	const onRemove = () => removeItem(identifier.id);
	const attrs = { className: 'pui-dynamic-list__item', ...(draggable ? { value: props.identifier } : {}) };

	const body = (
		<Item {...props}>
			<div className='item__content'>{children}</div>
			<section className='item__actions'>
				<IconButton icon='delete' onClick={onRemove} />
			</section>
		</Item>
	);

	const register = element => registerRef(index, element);

	return (
		<div {...attrs} key={index} ref={register}>
			{body}
		</div>
	);
}
