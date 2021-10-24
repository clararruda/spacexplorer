import React from 'react';
import {ApolloProvider} from '@apollo/client';

import graphqlClient from './src/services/api';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/routes';
import GlobalContext from './src/contexts/GlobalContext';

const App = () => {
  return (
    <GlobalContext>
      <ApolloProvider client={graphqlClient}>
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </ApolloProvider>
    </GlobalContext>
  );
};

export default App;
