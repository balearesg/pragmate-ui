import React from 'react';
import { ContextMenu, ContextItem, ContextMenuContainer } from 'pragmate-ui/context-menu';
import { Button } from 'pragmate-ui/components';
export function Example() {
	const handleItemClick = event => {
		event.stopPropagation();
		console.log('Item clicked!');
	};

	return (
		<ContextMenuContainer>
			<Button variant='primary'>Show context menu</Button>
			<ContextMenu>
				<ul>
					<ContextItem
						onClick={handleItemClick}
						icon='user' // replace with the actual icon name or path
						label='Settings'
					/>
					<ContextItem onClick={handleItemClick} label='Search' />
				</ul>
			</ContextMenu>
		</ContextMenuContainer>
	);
}
