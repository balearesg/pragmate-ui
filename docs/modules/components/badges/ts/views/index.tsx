import React from 'react';
import {Badges, Badge} from 'pragmate-ui/badges';
export /*bundle*/
function View() {
	return (
		<div className="pui-docs__container">
			<h2>Hello i'm a page</h2>
			<Badges type="primary" items={['primary', 'secondary', 'tertiary']} />
			<hr />
			<Badges>
				<Badge type="primary">pepito</Badge>
				<Badge type="secondary">pepito 2 </Badge>
				<Badge title="pepito es un loquillo">pepito 3 </Badge>
			</Badges>
		</div>
	);
}
