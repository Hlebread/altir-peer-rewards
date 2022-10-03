import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from './components/Header';
import StatusBar from './components/StatusBar/StatusBar';
import { COLORS } from './constants';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#5E8D48" barStyle="dark-content" />
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
