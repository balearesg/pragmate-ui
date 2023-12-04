import React from 'react';
import { useState, useRef, MutableRefObject, SyntheticEvent, ReactNode } from 'react';
import { Children } from './children';

type Props = {
	children: ReactNode;
	className?: string;
	onClose?: (e: SyntheticEvent<HTMLElement, Event>) => void;
	show?: boolean;
	size?: 'sm' | 'md' | 'lg' | 'xl';
};
export /*bundle*/
function Modal(props: Props) {
	const [state, setState] = useState({
		show: props?.show ?? false,
		closeClicked: false,
		container: null
	});
	const modal: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const close = async (event: SyntheticEvent<HTMLElement, Event>): Promise<void> => {
		if (event) event.stopPropagation();
		const { onClose } = props;
		const body: HTMLBodyElement = document.querySelector('body');
		modal.current.classList.add('modal-hidden');
		window.setTimeout(async (): Promise<void> => {
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

	const show: boolean = state.show;

	let cls: string = 'pui-modal ';
	cls += props.className ? props.className : '';
	cls += show ? ' show-modal' : '';

	if (props.size) {
		cls += ` modal-${props.size}`;
	}

	const output = [];

	if (show) {
		output.push(
			<div key="modal-content-wrapper" className="modal-wrapper">
				<div
					className={`modal-content ${!!props?.size ? `sizing-${props?.size}` : 'sizing-md'}`}
					onClick={event => {
						event.stopPropagation();
					}}
				>
					<Children {...props} close={close} key="children-content" />
				</div>
			</div>
		);
	}

	return (
		<div ref={modal} onClick={onClickBackdrop} className={cls}>
			{output}
		</div>
	);
}
