import React from 'react';

export const InputContext = React.createContext({} as any);
export const useInputContext = () => React.useContext(InputContext);
