import React from 'react';
import { Input, Label } from 'pragmate-ui/form';

export function ResultsFloating() {
	return (
		<>
			<h3>label only</h3>
			<Input type='text' name='name' label='Insert a text' />
			<h3>unstyled</h3>
			<Input variant='unstyled' type='text' name='name' label='Insert a text' />

			<h3>Placeholder only</h3>
			<Input type='text' name='name' placeholder='Insert a text' />

			<hr />
			<section>
				<h2>Labels positions</h2>

				<Input type='text' name='labels'>
					<Label>Normal position</Label>
				</Input>

				<Input type='text' name='labels'>
					<Label position='right'>Right position</Label>
				</Input>

				<Input type='text' name='labels'>
					<Label position='bottom-right'>Bottom right position</Label>
				</Input>

				<h3>Multiple labels</h3>
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
				<hr />
				<Input type='text' name='labels'>
					<Label position='bottom'>Bottom left position</Label>
				</Input>
			</section>

			<h3>Placeholder and label</h3>
			<Input type='text' name='name' floating label='Insert a text' />
			<hr />
			<h3>Floating label</h3>
			<Input variant='floating' type='text' name='name' floating label='Insert a text' />
		</>
	);
}
