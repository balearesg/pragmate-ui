import React from 'react';
import type { IDynamicContext } from './definitions';

export const DynamicListContext = React.createContext({} as IDynamicContext);
export /*bundle*/ const useDynamicListContext = () => React.useContext(DynamicListContext);
