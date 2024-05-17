import React from 'react';
import type { IDynamicContext } from './types';

export const DynamicListContext = React.createContext({} as IDynamicContext);
export /*bundle*/ const useDynamicListContext = () => React.useContext(DynamicListContext);
