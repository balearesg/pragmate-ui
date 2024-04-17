import * as React from 'react';
import { Modal } from './modal';
import { Button, HtmlWrapper } from 'pragmate-ui/components';
import { IAlertModalProps } from './types/alert';

export /*bundle*/
function AlertModal(props: IAlertModalProps) {
	const [state, setState] = React.useState({ fetching: false });
	const { text, title, centered, button = {} } = props;
	const close = async () => {
		setState({ fetching: true });
		if (props.onConfirm) await props.onConfirm();
		setState({ fetching: false });
		if (props.onClose) props.onClose();
	};
	const btnAttrs = {
		className: `btn btn-primary${props.className ? ` ${props.className}` : ''}`,
		disabled: state.fetching,
		label: props.buttonLabel || 'Confirm',
		onClick: close,
		...button,
	};

	let cls = `pui-alert-dialog${centered ? ' pui-alert-dialog-centered' : ''}`;
	if (props.className) cls += ` ${props.className}`;

	return (
		<Modal show className={cls} onClose={props.onClose}>
			<div className='alert-dialog-content'>
				{title && <HtmlWrapper>{title}</HtmlWrapper>}
				{text && <HtmlWrapper>{text}</HtmlWrapper>}
				{props.children ? props.children : null}
			</div>

			<div className='pui-modal-actions'>
				<Button {...btnAttrs} />
			</div>
		</Modal>
	);
}
