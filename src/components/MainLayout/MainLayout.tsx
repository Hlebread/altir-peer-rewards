import React, { FC } from 'react';
import { StatusBar, StatusBarProps, StyleSheet } from 'react-native';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

import { THEME } from '../../constants';

export interface MainLayoutProps extends SafeAreaViewProps {
  statusBarProps?: StatusBarProps;
}

const MainLayout: FC<MainLayoutProps> = ({
  children,
  statusBarProps,
  style,
  ...props
}) => (
  <>
    <StatusBar
      animated
      barStyle="dark-content"
      backgroundColor={THEME.palette.background.main}
      {...statusBarProps}
    />
    <SafeAreaView style={[styles.container, style]} {...props}>
      {children}
    </SafeAreaView>
  </>
);

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.palette.background.main,
  },
});
