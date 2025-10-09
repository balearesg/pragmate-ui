import React from 'react';
import { Button } from 'pragmate-ui/components';
import { UIExample, CodeExample } from 'pragmate-ui-docs/utils';
import { Code } from 'pragmate-ui/code';
import { getTpl } from '../get-tpl';

export function BlockExample() {
	return (
		<section>
			<UIExample>
				<Button title='button block' variant='primary' block>
					Primary button
				</Button>
			</UIExample>
			<CodeExample>
				<Code>{`<Button title="button primary" variant="primary">Primary button</Button>`}</Code>
			</CodeExample>
		</section>
	);
}
