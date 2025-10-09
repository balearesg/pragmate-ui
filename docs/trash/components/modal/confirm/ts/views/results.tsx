import * as React from 'react';
import { ConfirmModal } from 'pragmate-ui/modal';
import { Button } from 'pragmate-ui/components';

export function Results() {
	const [show, setShow] = React.useState(false);

	function handleModal() {
		setShow(!show);
	}

	return (
		<>
			<Button variant='primary' className='action-button' onClick={handleModal}>
				Display Modal!
			</Button>

			<ConfirmModal
				show={show}
				className='beauty-modal'
				title='Title confirm modal'
				text='text confirm modal for a description'
				onClose={handleModal}
				onCancel={handleModal}
				onConfirm={handleModal}
			/>
		</>
	);
}
