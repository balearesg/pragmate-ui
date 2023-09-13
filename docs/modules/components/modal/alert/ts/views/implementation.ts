export const implementation = `
import * as React from 'react';
import { AlertModal } from 'pragmate-ui/modal';

export function MyModal({show, setShow}) {
	const [show, setShow] = React.useState(false);

	function handleModal() {
		setShow(!show);
	}
	return (
		<>
			<AlertModal
				onConfirm={handleModal}
				className="beauty-modal"
				title="Title alert modal"
				text="text alert modal for a description"
				onClose={handleModal}
        	/>
		</>
	);
}`;
