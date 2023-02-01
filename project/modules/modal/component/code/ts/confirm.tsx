import * as React from 'react';
import { BeyondButton } from '@bgroup/ui/form';
import { BeyondModal } from './modal';

export /*bundle*/ const BeyondConfirmModal = (properties): JSX.Element => {
	type state = {
		fetching?: boolean;
	};
	const [state, setState] = React.useState<state>({ fetching: false });

	const process = async (event): Promise<void> => {
		event.stopPropagation();
		setState({ fetching: true });
		const { onConfirm, onClose } = properties;
		if (!onConfirm) {
			console.warn('there is no confirm funciton defined');
			setState({ fetching: false });
			return;
		}
		await onConfirm();
		setState({ fetching: false });
	};

	const { text, title, btn, onCancel, centered, onConfirm, btnConfirm, btnCancel } = properties;

	let cls: string = `beyond-confirm-dialog${centered ? ' beyond-confirm-dialog-centered' : ''}`;
	if (properties.className) cls += ` ${properties.className}`;

	const props = Object.assign({}, properties);
	delete props.text;
	delete props.title;
	delete props.className;
	delete props.centering;
	delete props.btnCancel;
	delete props.btnConfirm;
	delete props.onCancel;

	let cancelLabel: string = 'Cancelar';
	let confirmLabel: string = 'Confirmar';
	let clsCancel: string = 'btn btn-default btn-cancel';
	let clsConfirm: string = 'btn btn-primary btn-confirm';

	if (btnConfirm && typeof btnConfirm === 'object') {
		confirmLabel = btnConfirm.label ? btnConfirm.label : btn;
		clsConfirm = btnConfirm.className ? btnConfirm.className : clsConfirm;
	}

	if (btnCancel && typeof btnCancel === 'object') {
		confirmLabel = btnCancel.label ? btnCancel.label : btn;
		clsCancel = btnCancel.className ? btnCancel.className : clsCancel;
	}

	const disabled: { disabled?: boolean } = {};
	if (state.fetching) disabled.disabled = true;

	return (
		<BeyondModal show className={cls} onClose={onCancel}>
			<div className="confirm-dialog-content">
				{title && <h3>{title}</h3>}
				{text && <div>{text}</div>}
				{properties.children}
			</div>

			<div className="actions">
				<BeyondButton className={clsCancel} label={cancelLabel} {...disabled} onClick={onCancel} />
				<BeyondButton className={clsConfirm} label={confirmLabel} {...disabled} onClick={process} />
			</div>
		</BeyondModal>
	);
};
