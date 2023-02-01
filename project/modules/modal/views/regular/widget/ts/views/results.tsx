import * as React from 'react';
import { BeyondModal } from '@bgroup/ui/modal';

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
			{show && <BeyondModal show className="beauty-modal" onClose={handleModal}>
				<div>
					<p>This is a normal modal ❤</p>
				</div>
			</BeyondModal>}
		</>
	);
}
