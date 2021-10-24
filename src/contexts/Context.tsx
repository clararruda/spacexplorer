import React, {createContext, useState} from 'react';
import {Launches} from '../services/launches';

type StorageType = {
  favorite: string[];
  launches: Launches[];
};

type PropsStorageContext = {
  storage: StorageType;
  setStorage: React.Dispatch<React.SetStateAction<StorageType>>;
};

const DEFAULT_VALUE = {
  storage: {
    favorite: [],
    launches: [],
  },
  setStorage: () => {},
};

const Context = createContext<PropsStorageContext>(DEFAULT_VALUE);

const ContextProvider = ({children}) => {
  const [storage, setStorage] = useState(DEFAULT_VALUE.storage);
  return (
    <Context.Provider value={{storage, setStorage}}>
      {children}
    </Context.Provider>
  );
};
export {ContextProvider};
export default Context;
