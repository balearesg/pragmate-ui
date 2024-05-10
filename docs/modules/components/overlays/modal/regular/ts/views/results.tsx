import * as React from 'react';
import { Modal } from 'pragmate-ui/modal';
import { Button } from 'pragmate-ui/components';

export function Results() {
	const [show, setShow] = React.useState(false);

	function handleModal() {
		setShow(!show);
	}

	return (
		<>
			<Button variant='primary' onClick={handleModal}>
				Display Modal!
			</Button>
			{show && (
				<Modal show className='beauty-modal' onClose={handleModal}>
					<div>
						<p>This is a normal modal ❤</p>
					</div>
				</Modal>
			)}
		</>
	);
}
