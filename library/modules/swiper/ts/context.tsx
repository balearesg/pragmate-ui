import React from 'react';
import type { Controller } from './state/controller';

export interface ISwiperContext {
	footer: boolean;
	pagination?: boolean;
	navigation?: boolean;
	controller?: Controller;
	refs: {
		next: React.RefObject<HTMLDivElement>;
		container: React.RefObject<HTMLDivElement>;
		pagination: React.RefObject<HTMLDivElement>;
		prev: React.RefObject<HTMLDivElement>;
	};
}
export const SwiperContext = React.createContext({} as ISwiperContext);
export const useSwiperContext = () => React.useContext(SwiperContext);
