import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'pragmate-ui/dropdown';
export /*bundle*/
function View() {
	return (
		<>
			<Dropdown className='dropdown-menu'>
				<DropdownToggle>Click me</DropdownToggle>
				<DropdownMenu>
					<DropdownItem>Item 1</DropdownItem>
					<DropdownItem>Item 2</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</>
	);
}
