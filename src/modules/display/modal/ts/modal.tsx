import * as React from 'react';
import { useState, useRef, MutableRefObject, SyntheticEvent } from 'react';
import { Children } from './children';
import { IModalProps, IModalState } from './types/modal-props';

export /*bundle*/ function Modal(props: IModalProps) {
	const [state, setState] = useState<IModalState>({
		show: props?.show ?? false,
		closeClicked: (props.closeClicked || props.closeBackdrop) ?? true,
		container: null,
	});
	const modal: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const close = async (event: SyntheticEvent<HTMLElement, Event>): Promise<void> => {
		if (event) event.stopPropagation();

		const body: HTMLBodyElement = document.querySelector('body');
		modal.current.classList.add('modal-hidden');
		globalThis.setTimeout(async (): Promise<void> => {
			setState({ ...state, show: false, closeClicked: true });
			body.setAttribute('style', '');
			body.classList.remove('body-custom-modal-opened');
			const { onClose } = props;
			if (!onClose || typeof onClose !== 'function') return;
			onClose(event);
		}, 200);
	};

	const onClickBackdrop = (event: SyntheticEvent<HTMLElement, Event>): void => {
		event.stopPropagation();
		if (!state.closeClicked) return;
		close(event);
	};

	const show: boolean = state.show;

	let cls: string = 'pui-modal ';
	cls += props.className ? props.className : '';

	if (show) cls += ' show-modal';
	const output = [];

	if (show) {
		output.push(
			<div key='modal-content-wrapper' className='modal-wrapper'>
				<div
					className='modal-content'
					onClick={event => {
						event.stopPropagation();
					}}
				>
					<Children {...props} close={close} key='children-content'>
						{props.children}
					</Children>
				</div>
			</div>,
		);
	}

	return (
		<div ref={modal} onClick={onClickBackdrop} className={cls}>
			{output}
		</div>
	);
}
