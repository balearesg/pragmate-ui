import React from 'react';
import { Button } from 'pragmate-ui/components';
import { UIExample, CodeExample } from 'pragmate-ui-docs/utils';
import { Code } from 'pragmate-ui/code';
import { getTpl } from '../get-tpl';
import { PendingPromise } from '@beyond-js/kernel/core';

export function ProcessingExample() {
	const onClick = event => {
		const promise = new PendingPromise();
		setTimeout(() => {
			promise.resolve(true);
		}, 1000);
		return promise;
	};
	return (
		<section>
			<UIExample>
				<Button title='button primary' variant='primary' fetching>
					Primary button
				</Button>
				<Button title='button primary' variant='primary' onClick={onClick}>
					Click me
				</Button>
			</UIExample>
			<CodeExample>
				<Code>{`<Button title="button primary" variant="primary">Primary button</Button>`}</Code>
			</CodeExample>
		</section>
	);
}
