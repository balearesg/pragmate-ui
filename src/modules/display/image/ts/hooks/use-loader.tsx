import React from 'react';

export /*bundle*/ function useLoader(src, onErrorCallback) {
	const [status, setStatus] = React.useState<'loading' | 'ready' | 'error'>('loading');

	React.useEffect(() => {
		if (!src) {
			// setStatus('error');
			return;
		}

		const img = new globalThis.Image();
		const onLoad = () => {
			setStatus('ready');
		};
		const onError = e => {
			setStatus('error');
			if (onErrorCallback) onErrorCallback(e);
		};

		img.addEventListener('load', onLoad);
		img.addEventListener('error', onError);
		img.src = src;

		return () => {
			img.removeEventListener('load', onLoad);
			img.removeEventListener('error', onError);
		};
	}, [src]);

	return { status };
}
