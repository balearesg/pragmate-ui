import * as React from 'react';
import Content from './content.mdx';
import Code from 'pragmate-ui/code';
import { Accordion } from 'pragmate-ui/collapsible';

export /*bundle*/
function View() {
	return (
		<div>
			<Content />
			<h3>Example</h3>
			<Accordion.Container>
				<Accordion.Item title='Punto 1'>hola</Accordion.Item>
				<Accordion.Item title='Punto 2'>hola 2</Accordion.Item>
			</Accordion.Container>
		</div>
	);
}
