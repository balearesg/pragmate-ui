import React from 'react';
import { StyleObserver } from './observer';
export function useStyles() {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!ref.current) return;
		const host = ref.current.getRootNode()?.host;
		if (!host) console.warn('is not inside a web component');
		if (!host.shadowRoot.insertedStyles) host.shadowRoot.insertedStyles = new Set();

		const headStyles = document.head.querySelectorAll('style[data-emotion]');
		// the callback name is used because it is the property parameter of the StyleObserver class
		const callback = (nodes: HTMLElement[] | NodeList) => {
			const insertedStyles = new Set();
			nodes.forEach(node => {
				const styleContent = node?.textContent;
				if (!(node instanceof HTMLStyleElement) || insertedStyles.has(styleContent)) return;

				const clonedStyle = node.cloneNode(true);
				host.shadowRoot.appendChild(clonedStyle);
				insertedStyles.add(styleContent);
			});
		};

		const styleObserver: StyleObserver = new StyleObserver({ callback });
		const targetNode: HTMLHeadElement = document.head;
		styleObserver.startObserving(targetNode);
		callback(headStyles);

		return () => styleObserver.stopObserving();
	}, [ref.current]);

	return { ref };
}
