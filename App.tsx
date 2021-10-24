import React from 'react';
import {ApolloProvider} from '@apollo/client';

import graphqlClient from './src/services/api';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/routes';

const App = () => {
  return (
    <ApolloProvider client={graphqlClient}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
