import * as React from 'react';
import { StoreManager } from './store';
import { useStore } from '@beyond-js/react-18-widgets/hooks';

interface IModuleContext {
	store: StoreManager;
}

const ModuleContext = React.createContext<IModuleContext | null>(null);

interface IModuleProviderProps {
	children: React.ReactNode;
	store: StoreManager;
}

export function ModuleProvider({ store, children }: IModuleProviderProps): JSX.Element {
	useStore(store.colorManager);
	return <ModuleContext.Provider value={{ store }}>{children}</ModuleContext.Provider>;
}

export function useModuleContext(): IModuleContext {
	const context = React.useContext(ModuleContext);
	if (!context) {
		throw new Error('useModuleContext must be used within a ModuleProvider');
	}
	return context;
}
