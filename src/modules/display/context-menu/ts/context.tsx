import React from 'react';
import type { IContextMenu } from './definitions';

export const ContextMenuContext = React.createContext({} as IContextMenu);
export const useContextMenuContext = () => React.useContext(ContextMenuContext);
