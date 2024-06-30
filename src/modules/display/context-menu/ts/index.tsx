import React, { useRef, useEffect } from 'react';
import { useContextMenuContext } from './context';
import { useContextMenu } from './use-context';
import type { IContextMenuProps } from './definitions';

export /*bundle*/ function ContextMenu({ className, unmount, children }: IContextMenuProps) {
	const container = document.createElement('span');
	const ref = useRef<HTMLDivElement>(null);

	const { opened, position } = useContextMenuContext();
	useContextMenu(container, ref, position, unmount);

	if (!opened) {
		return null;
	}
	const styles: React.CSSProperties = {
		position: 'absolute', // Explicitly typed as a valid CSS position value
		top: `${position.y}px`,
		left: `${position.x}px`,
	};

	const cls = `pui-context-menu ${className || ''}`;
	return (
		<div style={styles} ref={ref} className={cls}>
			{children}
		</div>
	);
}
