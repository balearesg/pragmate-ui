import React from 'react';
import { Button } from 'pragmate-ui/components';
import { UIExample, CodeExample } from 'pragmate-ui-docs/utils';
import { Code } from 'pragmate-ui/code';
import { getTpl } from '../get-tpl';

export function IconsExample() {
	return (
		<section>
			<UIExample>
				<Button icon='add' variant='primary'>
					Primary button
				</Button>
				<Button icon='add' variant='primary' className='icon--right'>
					Right icon
				</Button>
			</UIExample>
			<CodeExample>
				<Code>{getTpl({ variant: 'primary', bordered: true })}</Code>
				<Code>{getTpl({ variant: 'primary', className: 'icon--right', bordered: true })}</Code>
			</CodeExample>
		</section>
	);
}
