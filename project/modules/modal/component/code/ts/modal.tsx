import * as React from 'react';
import { useState, useRef, MutableRefObject, SyntheticEvent, useEffect, ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import { Children } from './children';

type props = {
	children: ReactNode;
	className?: string;
	onClose?: (e: SyntheticEvent<HTMLElement, Event>) => void;
	show?: boolean;
};
export /*bundle*/
function BeyondModal(props: props): ReactPortal {
	type state = {
		container?: HTMLDivElement;
		show: boolean;
		closeClicked: boolean;
	};
	const [state, setState] = useState<state>({
		show: props?.show,
		closeClicked: false,
		container: null,
	});
	const modal: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const close = async (event: SyntheticEvent<HTMLElement, Event>): Promise<void> => {
		if (event) event.stopPropagation();
		const { onClose } = props;
		const body: HTMLBodyElement = document.querySelector('body');
		modal.current.classList.add('modal-hidden');
		window.setTimeout(async (): Promise<void> => {
			//  if (typeof onClose === "function") return;
			setState({ ...state, show: false, closeClicked: true });
			body.setAttribute('style', '');
			body.classList.remove('body-custom-modal-opened');
			onClose(event);
		}, 300);
	};

	const onClickBackdrop = (event: SyntheticEvent<HTMLElement, Event>): void => {
		event.stopPropagation();
		close(event);
	};
	useEffect((): (() => void) => {
		const container: HTMLDivElement = document.createElement('div');
		setState({ ...state, container });
		const body: HTMLBodyElement = document.querySelector('body');
		body.appendChild(container);

		return (): void => {
			body.removeChild(container);
		};
	}, []);

	const { container } = state;

	if (!container) return null;
	const show: boolean = state.show;

	let cls: string = 'beyond-element-modal ';
	cls += props.className ? props.className : '';

	if (show) cls += ' show-modal';
	const output = [];

	if (show) {
		output.push(
			<div key="modal-content-wrapper" className="modal-wrapper">
				<div
					className="modal-content"
					onClick={(event) => {
						event.stopPropagation();
					}}>
					<Children {...props} close={close} key="children-content" />
				</div>
			</div>
		);
	}

	return createPortal(
		<div ref={modal} onClick={onClickBackdrop} className={cls}>
			{output}
		</div>,
		container
	);
}
