import React, { useEffect } from 'react';

export function useContextMenu(container: HTMLElement, ref: React.RefObject<HTMLDivElement>, position: { x: number, y: number }, unmount: (flag: boolean) => void) {
    useEffect(() => {
        const close = () => {
            document.removeEventListener('click', close);
            unmount(false);
        };

        const body = document.querySelector('body');
        if (!body) return;

        document.addEventListener('click', close);
        body.appendChild(container);

        const refCurrent = ref.current;
        if (!refCurrent) return;

        const { offsetWidth, offsetHeight } = refCurrent;
        const tWidth = offsetWidth + position.x;
        const tHeight = offsetHeight + position.y;

        if (tWidth > globalThis.innerWidth) {
            refCurrent.style.left = `${position.x - offsetWidth}px`;
        }
        if (tHeight > globalThis.innerHeight) {
            refCurrent.style.top = `${position.y - offsetHeight}px`;
        }

        return () => {
            document.removeEventListener('click', close);
            container.remove();
        };
    }, [position.x, position.y, container, ref, unmount]);
}