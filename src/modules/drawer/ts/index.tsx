import * as React from 'react';
import { IPUIProps } from 'pragmate-ui/base'; // Usar la interfaz base
import { motion } from 'framer-motion';
import { IconButton } from 'pragmate-ui/icons';
interface DrawerProps extends IPUIProps {
	position?: 'left' | 'right' | 'top' | 'bottom';
	open: boolean;
	onClose: () => void;
}

const positionClasses = {
	left: 'pui-drawer-left',
	right: 'pui-drawer-right',
	top: 'pui-drawer-top',
	bottom: 'pui-drawer-bottom',
};

export /*bundle*/ function Drawer({ className, position = 'left', open, onClose, children }: DrawerProps) {
	let drawerClass = open ? `pui-drawer ${positionClasses[position]}` : 'pui-drawer hidden';
	if (className) drawerClass += ' ' + className;
	if (open) drawerClass += ` pui-drawer-open-${position}`;
	if (!open) return;
	const cls = `pui-drawer-container${className ? ` ${className}` : ''}`;
	return (
		<motion.div className={cls}>
			<motion.div
				initial={{
					x: '+100vh',
					opacity: 0,
				}}
				animate={{
					x: 0,
					opacity: 1,
				}}
				exit={{
					x: '100vh',
					opacity: 0,
				}}
				transition={{
					duration: 0.3,
					ease: 'linear',
				}}
				className={drawerClass}
			>
				<div className='pui-drawer-content'>
					<IconButton className='circle pui-drawer-close' icon='close' onClick={onClose}></IconButton>
					{children}
				</div>
			</motion.div>
		</motion.div>
	);
}
