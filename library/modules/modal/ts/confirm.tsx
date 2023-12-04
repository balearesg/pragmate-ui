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

	const { text, title, btn, onCancel, centered, onConfirm, btnConfirm, btnCancel, className, classNameExt, texts } =
		properties;

	let cls: string = `pui-confirm-dialog${centered ? ' centered' : ' non-centered'}`;
	if (className) cls += ` ${className}`;

	const props = Object.assign({}, properties);

	['text', 'title', 'className', 'centering', 'btnCancel', 'btnConfirm', 'onCancel', 'size', 'texts'].forEach(
		prop => delete props[prop]
	);

	let cancelLabel: string = texts?.cancel ? texts.cancel : 'Cancelar';
	let confirmLabel: string = texts?.confirm ? texts.confirm : 'Confirmar';
	let clsCancel: string = 'btn btn-default btn-cancel';
	let clsConfirm: string = 'btn btn-primary btn-confirm';

	if (btnConfirm && typeof btnConfirm === 'object') {
		confirmLabel = btnConfirm.label ? btnConfirm.label : btn;
		clsConfirm = btnConfirm.className ? btnConfirm.className : clsConfirm;
	}

	if (btnCancel && typeof btnCancel === 'object') {
		cancelLabel = btnCancel.label ? btnCancel.label : btn;
		clsCancel = btnCancel.className ? btnCancel.className : clsCancel;
	}

	const disabled: { disabled?: boolean } = {};
	if (state.fetching) disabled.disabled = true;

	return (
		<Modal show className={cls} onClose={onCancel} size={properties?.size || 'md'}>
			<div className="confirm-dialog-content">
				{title && <h3 className={classNameExt?.title ? classNameExt?.title : 'dialog-title-text'}>{title}</h3>}
				{text && (
					<p className={classNameExt?.description ? classNameExt?.description : 'dialog-description-text'}>
						{text}
					</p>
				)}
				{properties.children}
			</div>

			<div
				className={
					classNameExt?.classNameActionDiv
						? classNameExt?.classNameActionDiv
						: `actions ${centered ? ' centered' : ' '}`
				}
			>
				<Button
					label={cancelLabel}
					{...disabled}
					onClick={onCancel}
					variant={classNameExt?.classNameBtnCancel ? classNameExt.classNameBtnCancel : 'secondary'}
					bordered={true}
				/>
				<Button
					className={clsConfirm}
					label={confirmLabel}
					{...disabled}
					onClick={process}
					variant={classNameExt?.classNameBtnConf ? classNameExt.classNameBtnConf : 'primary'}
					bordered
				/>
			</div>
		</Modal>
	);
};
