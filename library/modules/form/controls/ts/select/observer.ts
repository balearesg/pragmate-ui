export class StyleObserver {
	private observer: MutationObserver;

	constructor({ callback }) {
		this.observer = new MutationObserver(mutations => {
			mutations.forEach(mutation => {
				if (mutation.type === 'childList') {
					callback(mutation.addedNodes);
				}
			});
		});
	}

	startObserving() {
		const config = { childList: true };
		const targetNode = document.head;
		this.observer.observe(targetNode, config);
	}

	stopObserving() {
		this.observer.disconnect();
	}
}
