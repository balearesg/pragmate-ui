import React from 'react';
import { Input } from 'pragmate-ui/form';
import { UIExample } from 'pragmate-ui-docs/utils';

export function Dates() {

    const iconCalendar = {
        icon: '<g stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"></path><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></g>',
        viewBox: '0 0 16 16'
    }


	return (
		<>
        <p>We can use the common date type inputs.</p>
        <p>The pragmate date type inputs also allow you to change the default date icon of the input and add one of your choice.</p>
			<UIExample>
                <Input variant='floating' type='date' value="" />
                <Input variant='floating' type='date' label='Type Date' icon="user" value="" />
                <Input variant='floating' type='date' {...iconCalendar} value="" />
                <Input variant='floating' type='datetime-local' icon="box" value="" />
			</UIExample>
		</>
	);
}
