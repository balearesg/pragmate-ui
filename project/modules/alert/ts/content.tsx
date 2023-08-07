import * as React from 'react';
import { Icon } from 'pragmate-ui/icons';
export function Content({ type, message, children, title, icon }) {
	let output = null;

	if (title) {
		output.push = (
			<header className='alert__title'>
				<h3 className='alert__title-span' dangerouslySetInnerHTML={{ __html: title }} />
			</header>
		);
	}

	if (message) {
		output.push(<span dangerouslySetInnerHTML={{ __html: message }}></span>);
	}
	const Control = icon ? 'section' : React.Fragment;
	return <Control>{children}</Control>;
}
