import React from 'react';
import Select from 'react-select';
import { StyleObserver } from './observer';

export /*bundle*/
function ReactSelect(props) {
	const properties = { ...props };
	delete properties.widget;

	React.useEffect(() => {
		const headStyles = document.head.querySelectorAll('style[data-emotion]');

		const insert = (nodes: HTMLElement[] | NodeList) => {
			nodes.forEach(node => {
				if (node instanceof HTMLStyleElement) {
					// Handle the new style element
					const clonedStyle = node.cloneNode(true) as HTMLElement;
					props.widget.shadowRoot.appendChild(clonedStyle);
				}
			});
		};

		const styleObserver = new StyleObserver({
			callback: insert,
		});
		styleObserver.startObserving();
		insert(headStyles);

		return () => styleObserver.stopObserving();
	}, []);

	return <Select {...properties} />;
}
