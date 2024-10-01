import React from 'react';

export interface DrawerContextType {
	open: boolean;
	onClose: () => void;
}

export const DrawerContext = React.createContext<DrawerContextType>({
	open: false,
	onClose: () => {},
});

export /*bundle*/ const useDrawerContext = () => {
	const context = React.useContext(DrawerContext);
	if (!context) {
		throw new Error('useDrawerContext must be used within a DrawerProvider');
	}
	return context;
};
