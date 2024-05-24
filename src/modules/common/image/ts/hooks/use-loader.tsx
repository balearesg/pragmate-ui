import React, { useState, useEffect } from 'react';

export /*bundle*/ function useLoader(src) {
	const [status, setStatus] = React.useState<'loading' | 'ready' | 'error'>('loading');

	React.useEffect(() => {
		if (!src) {
			setStatus('error');
			return;
		}

		const img = new globalThis.Image();
		const manager = (event: string) => {
			const methods = { add: 'addEventListener', remove: 'removeEventListener' };
			const states = { load: 'ready', error: 'error' };
			const events = ['load', 'error'];
			const method = methods[event];
			events.forEach(event => img[method](event, () => setStatus(states[event])));
		};

		manager('add');
		img.src = src;

		return () => {
			manager('remove');
		};
	}, [src]);

	return { status };
}
