export const implementation = `import React from 'react';
import { ConfirmModal } from 'pragmate-ui/modal';

export function Results() {
	const [show, setShow] = React.useState(false);

	function handleModal() {
		setShow(!show);
	}
	return (
		<>
			<button className="action-button" onClick={handleModal}>
				Display Modal!
			</button>
			{show &&  
				<ConfirmModal
					show
					className="beauty-modal"
					title="Title confirm modal"
					text="text confirm modal for a description"
					onClose={handleModal}
					onCancel={handleModal}
					onConfirm={handleModal}
			  />}
		</>
	);
}`;
