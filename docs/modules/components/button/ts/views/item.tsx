import React from 'react';
import {Button} from 'pragmate-ui/components';
import {Code} from 'pragmate-ui/code';
import {getTpl} from './get-tpl';

export function Item({variant}) {
	return (
		<>
			<div className="column">
				<Button variant={variant}>Click me!</Button>
				<Code>{getTpl({variant})}</Code>
			</div>
			<div className="column">
				<Button outlined={true} variant={variant}>
					Click me!
				</Button>
				<Code>{getTpl({variant, outlined: true})}</Code>
			</div>
		</>
	);
}
