import React from 'react';
import { BeyondModal } from './modal';
import { BeyondButton } from '@bgroup/ui/form';
export /*bundle*/
function BeyondAlertModal(props) {
	
	const [state, setState] = React.useState({ fetching: false });

	const close = (event) => {
		setState({ fetching: true });
		if (props.onConfirm) props.onConfirm();
		setState({ fetching: false });
		if (props.onClose) props.onClose();
	};
	const { text, title, btn, centered } = props;
	let btnLabel: string = typeof btn === 'string' ? btn : 'Confirmar';

	let cls: string = `beyond-alert-dialog${centered ? ' beyond-alert-dialog-centered' : ''}`;
	if (props.className) cls += ` ${props.className}`;
	let clsCancel: string = 'btn btn-default btn-cancel';

	
	if (btn && typeof btn === 'object') {
		btnLabel = btn.label ?? btn;
		clsCancel = btn.className ?? clsCancel;
	};

	const disabled: { disabled?: boolean } = {};
	if (state.fetching) disabled.disabled = true;

	return (
		<BeyondModal show className={cls}>
			<div className="alert-dialog-content">
				{title && <h3 dangerouslySetInnerHTML={{ __html: title }} />}
				{text && <div dangerouslySetInnerHTML={{ __html: text }} />}
				{props.children ? props.children : null}
			</div>

			<div className="actions">
				<BeyondButton className={clsCancel} label={btnLabel} onClick={close} {...disabled} />
			</div>
		</BeyondModal>
	);
}
