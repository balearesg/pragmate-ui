import * as React from 'react';
import { IconButton } from '@bgroup/ui/icons';

export function Clipboard({ text, message }) {
	const ref = React.useRef(null);
	const polyfill = text => {
		const textArea = document.createElement('textarea');
		textArea.value = text;

		// Avoid scrolling to bottom
		textArea.style.top = '0';
		textArea.style.left = '0';
		textArea.style.position = 'fixed';

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			const successful = document.execCommand('copy');
			const msg = successful ? 'successful' : 'unsuccessful';
			console.log('Fallback: Copying text command was ' + msg);
		} catch (err) {
			console.error('Fallback: Oops, unable to copy', err);
		}
	};
	const onClick = async event => {
		const target = event.currentTarget;
		const text = target.dataset.text;
		if (!navigator.clipboard) {
			return polyfill(text);
		}
		try {
			await navigator.clipboard.writeText(text);
			const span = ref.current.querySelector('.action-copied');
			span.classList.add('show');
			window.setTimeout(() => {
				span.classList.add('hide');
				window.setTimeout(() => span.classList.remove('show', 'hide'), 300);
			}, 500);
		} catch (e) {
			console.log('some error', e);
		}
	};

	return (
		<div>
			<div className="clipboard__container" data-text={text} ref={ref} onClick={onClick}>
				<IconButton icon="copy" />
				<span className="action-copied">Copied</span>
			</div>
		</div>
	);
}
