import React from 'react';
import { useDropdownContext } from '../context';
export function useClickContainer({ toggleMenu, setToggleMenu }) {
	const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect((): (() => void) => {
		const onClick = (event: MouseEvent): void => {
			const { current } = ref;
			const { target, currentTarget } = event;
			const path = event.composedPath ? event.composedPath() : [];
			const pathTarget = path.length > 0 ? (path[0] as Node) : null;
			const isSameNode = current === target || current === currentTarget || pathTarget === current;
			const isAChildren = current?.contains(pathTarget);
			if (toggleMenu && !isSameNode && !isAChildren) setToggleMenu(false);
		};
		globalThis.document.addEventListener('click', onClick);
		return (): void => globalThis.document.removeEventListener('click', onClick);
	}, [toggleMenu]);

	return { ref };
}
