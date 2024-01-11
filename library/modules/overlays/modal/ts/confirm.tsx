import React from 'react';
import { Button } from 'pragmate-ui/components';
import { Modal } from './modal';

export /*bundle*/ const ConfirmModal = (properties): JSX.Element => {
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

	let cls: string = `pragmate-confirm-dialog${centered ? ' pragmate-confirm-dialog-centered' : ''}`;
	if (properties.className) cls += ` ${properties.className}`;

	const props = Object.assign({}, properties);

	['text', 'title', 'className', 'centering', 'btnCancel', 'btnConfirm', 'onCancel'].forEach(
		prop => delete props[prop]
	);

	let cancelLabel: string = 'Cancelar';
	let confirmLabel: string = 'Confirmar';
	let clsCancel: string = 'btn btn-default btn-cancel';
	let clsConfirm: string = 'btn btn-primary btn-confirm';
	let variantConfirm: string = 'success';
	let variantCancel: string = "warning"

	if (btnConfirm && typeof btnConfirm === 'object') {
		confirmLabel = btnConfirm.label ? btnConfirm.label : confirmLabel;
		clsConfirm = btnConfirm.className ? btnConfirm.className : clsConfirm;
		variantConfirm = btnConfirm.variant ?? variantConfirm
	}

	if (btnCancel && typeof btnCancel === 'object') {
		cancelLabel = btnCancel.label ? btnCancel.label : cancelLabel;
		clsCancel = btnCancel.className ? btnCancel.className : clsCancel;
		variantCancel = btnCancel.variant ?? variantCancel
	}

	const disabled: { disabled?: boolean } = {};
	if (state.fetching) disabled.disabled = true;

	return (
		<Modal show className={cls} onClose={onCancel}>
			<div className="confirm-dialog-content">
				{title && <h3>{title}</h3>}
				{text && <div>{text}</div>}
				{properties.children}
			</div>

			<div className="actions">
				<Button label={cancelLabel} {...disabled} onClick={onCancel} variant={variantCancel} />
				<Button
					className={clsConfirm}
					label={confirmLabel}
					{...disabled}
					onClick={process}
					variant={variantConfirm}
				/>
			</div>
		</Modal>
	);
};
