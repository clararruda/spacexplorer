import React from 'react';
import {ContextProvider} from './Context';

const GlobalContext = ({children}) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default GlobalContext;
