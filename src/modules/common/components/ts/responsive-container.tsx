import React from 'react';
import { useMediaQuery } from './hooks/use-media-query';

/* 
   Full interface definition for the specs object, ensuring all possible sizes are optional.
   This is the full interface, and we'll use `Partial<ISpecs>` in the component props.
*/
interface ISpecs {
	xs?: React.ComponentType | null;
	sm?: React.ComponentType | null;
	md?: React.ComponentType | null;
	lg?: React.ComponentType | null;
}

export /*bundle*/ function ResponsiveContainer(props: Partial<ISpecs>) {
	const size = useMediaQuery();

	// Ordered sizes, from smallest to largest.
	const sizes = ['xs', 'sm', 'md', 'lg'];

	// Function to find the first available component for the current or larger screen size.
	const getComponent = (currentSize: string): React.ComponentType | null => {
		const currentIndex = sizes.indexOf(currentSize);
		for (let i = currentIndex; i < sizes.length; i++) {
			const component = props[sizes[i] as keyof ISpecs];
			if (component !== undefined && component !== null) {
				return component;
			}
		}
		return null;
	};

	const Component = getComponent(size);

	// Return null if no matching component is found.
	if (!Component) {
		return null;
	}

	// Render the component matching the current or closest screen size.
	return <Component />;
}
