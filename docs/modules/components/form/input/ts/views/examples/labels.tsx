import React from 'react';
import { Input, Label } from 'pragmate-ui/form';
import { UIExample } from 'pragmate-ui-docs/utils';

export function LabelExamples() {
	return (
		<>
			<UIExample>
				<Input type='text' name='labels'>
					<Label>Normal position</Label>
				</Input>
				<Input type='text' name='labels'>
					<Label position='right'>Right position</Label>
				</Input>
				<Input type='text' name='labels'>
					<Label position='bottom-right'>Bottom right position</Label>
				</Input>
				<Input type='text' name='labels'>
					<Label position='bottom'>Bottom left position</Label>
				</Input>
				<hr />
				<h5>Multiple labels</h5>
				<Input type='text' name='labels'>
					<Label>
						<span>Normal position</span>
						<span> Right position</span>
					</Label>

					<Label position='bottom'>
						<span>Bottom left position</span>
						<span>Bottom right position</span>
					</Label>
				</Input>
			</UIExample>
		</>
	);
}
