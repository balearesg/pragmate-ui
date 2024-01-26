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

		const styleObserver: StyleObserver = new StyleObserver({
			callback: insert,
		});
		const targetNode: HTMLHeadElement = document.head;
		styleObserver.startObserving(targetNode);
		insert(headStyles);

		return () => styleObserver.stopObserving();
	}, []);

	return <Select {...properties} className='container-select' />;
}
