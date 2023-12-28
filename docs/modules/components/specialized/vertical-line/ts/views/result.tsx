import React from 'react';
import {VerticalLine} from 'pragmate-ui/vertical-line';
import {events} from './list-events';

export function Result() {
	return (
		<div className="content">
			<VerticalLine events={events} variant="primary" />
		</div>
	);
}
