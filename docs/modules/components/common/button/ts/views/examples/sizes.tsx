import React from 'react';
import { Button } from 'pragmate-ui/components';
import { UIExample, CodeExample } from 'pragmate-ui-docs/utils';
import { Code } from 'pragmate-ui/code';
import { getTpl } from '../get-tpl';

export function SizesExample() {
	return (
		<section>
			<UIExample>
				<div>
					<Button title='button primary' variant='primary' sizing='xs'>
						xs size
					</Button>
				</div>
				<div>
					<Button title='button primary' variant='primary' sizing='sm'>
						sm size
					</Button>
				</div>
				<div>
					<Button title='button primary' variant='primary'>
						Default
					</Button>
				</div>
				<div>
					<Button title='button primary' variant='primary' sizing='lg'>
						lg size
					</Button>
				</div>
			</UIExample>
			<CodeExample>
				<Code>{`<Button title="button primary" variant="primary">Primary button</Button>`}</Code>
			</CodeExample>
		</section>
	);
}
