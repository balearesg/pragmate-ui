export const implementation = `
import * as React from 'react';
import { BeyondConfirmModal } from '@bgroup/ui/modal';

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
			{show && <BeyondConfirmModal show className="beauty-modal" onClose={handleModal}>
				<div>
					<p>This is the confirm modal ❤</p>
				</div>
			</BeyondConfirmModal>}
		</>
	);
}
`;
