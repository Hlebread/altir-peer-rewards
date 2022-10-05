import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { FloatingActionButton, GiveRewardForm } from '../../components';
import { THEME } from '../../constants';
import { useKeyboardVisible } from '../../hooks';

const AddRewardScreen = () => {
  const { goBack } = useNavigation();

  const keyboardVisible = useKeyboardVisible();

  return (
    <View style={styles.container}>
      <GiveRewardForm />
      <FloatingActionButton
        onPress={goBack}
        style={keyboardVisible && styles.fabInvisible}>
        <Icon name="close" size={40} />
      </FloatingActionButton>
    </View>
  );
};

export default AddRewardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: THEME.palette.background.dark,
    borderTopLeftRadius: THEME.spacing.lg,
    borderTopRightRadius: THEME.spacing.lg,
  },
  fabInvisible: {
    display: 'none',
  },
});
