import * as React from 'react';
import { ComboBox } from './combobox';
import { Item } from 'react-stately';

export /*bundle*/
function View() {
	return (
		<>
			<h2>Hello i'm a page Popover</h2>
			<ComboBox label="Favorite Animal">
				<Item key="red panda">Red Panda</Item>
				<Item key="cat">Cat</Item>
				<Item key="dog">Dog</Item>
				<Item key="aardvark">Aardvark</Item>
				<Item key="kangaroo">Kangaroo</Item>
				<Item key="snake">Snake</Item>
			</ComboBox>
		</>
	);
}
