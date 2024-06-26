import React, { useContext, PropsWithChildren } from 'react';

import { IDropdownProviderProps } from './types';

export const DropdownContext = React.createContext<IDropdownProviderProps>(null);
export /*bundle */ const useDropdownContext = () => useContext(DropdownContext);
