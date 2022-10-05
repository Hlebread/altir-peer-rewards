import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { Header } from './components';
import { RootNavigator } from './navigation';
import { store } from './store';

const App = () => (
  <StoreProvider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Header />
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  </StoreProvider>
);

export default App;
