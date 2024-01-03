import * as React from 'react';
import Content from './content.mdx';
import { Code } from 'pragmate-ui/code';
import { CollapsibleContainer, CollapsibleHeader, CollapsibleContent } from 'pragmate-ui/collapsible';
export /*bundle*/
function View() {
	return (
		<div>
			<Content />
			<h3>Example</h3>

			<CollapsibleContainer onToggle={isOpen => console.log(isOpen)}>
				<CollapsibleHeader className='my-header'>Click to Toggle</CollapsibleHeader>
				<CollapsibleContent className='my-content'>
					<p>This content is collapsible!</p>
				</CollapsibleContent>
			</CollapsibleContainer>
		</div>
	);
}
