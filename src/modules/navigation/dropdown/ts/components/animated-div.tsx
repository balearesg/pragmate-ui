import * as React from 'react';
import { motion } from 'framer-motion';

export function AnimatedDiv({ children, className }: { children; className? } = { children: null, className: '' }) {
	return (
		<motion.div
			className={className}
			animate={{
				opacity: 1,
				transition: {
					duration: 0.1,
				},
				y: 0,
			}}
			exit={{
				transition: {
					duration: 0.3,
				},
				opacity: 0,
			}}
		>
			{children}
		</motion.div>
	);
}
