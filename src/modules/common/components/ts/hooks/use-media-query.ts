import { useState, useEffect } from 'react';

export /*bundle*/ function useMediaQuery() {
	const [size, setSize] = useState('lg');

	const calculateSize = () => {
		const width = window.innerWidth;
		if (width < 576) {
			return 'xs';
		} else if (width >= 576 && width < 768) {
			return 'sm';
		} else if (width >= 768 && width < 992) {
			return 'md';
		} else {
			return 'lg';
		}
	};

	useEffect(() => {
		const handleResize = () => {
			const newSize = calculateSize();
			setSize(newSize);
		};

		// Set initial size
		handleResize();
		// Set up event listener for resizing
		window.addEventListener('resize', handleResize);
		// Clean up function
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return size;
}
