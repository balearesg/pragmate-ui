import React from 'react';
import { RippleEffect } from 'pragmate-ui/ripple';
import tippy from 'tippy.js';

export function useRipple(title: string, ref?: React.RefObject<HTMLButtonElement>): React.RefObject<HTMLButtonElement> {
	ref = ref ?? React.useRef<HTMLButtonElement>(null);
	React.useEffect(() => {
		const ripple = new RippleEffect();
		ripple.addRippleEffect(ref.current);

		if (title) {
			tippy(ref.current);
		}
	}, [title]);

	return ref;
}
