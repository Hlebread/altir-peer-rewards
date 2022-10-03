import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { FloatingActionButton } from './components/FloatingActionButton';
import GiveRewardForm from './components/GiveRewardForm/GiveRewardForm';

import { Header } from './components/Header';
import RootNavigator from './navigation/RootNavigator';

import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [state, setState] = useState('');

  return (
    <StoreProvider store={store}>
      {/* <GestureHandlerRootView style={styles.gestureHandlerView}> */}
      <SafeAreaProvider>
        <NavigationContainer>
          <Header />

          <RootNavigator />


        </NavigationContainer>
      </SafeAreaProvider>
      {/* </GestureHandlerRootView> */}
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  gestureHandlerView: {
    flex: 1,
  },
});

export default App;
