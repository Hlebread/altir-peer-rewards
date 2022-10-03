import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GiveRewardForm from '../../components/GiveRewardForm/GiveRewardForm';
import { THEME } from '../../constants';

const AddRewardScreen = () => {
  return (
    <View style={styles.container}>
      <GiveRewardForm />
    </View>
  );
};

export default AddRewardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: THEME.palette.secondary.dark,
    borderTopLeftRadius: THEME.spacing.lg,
    borderTopRightRadius: THEME.spacing.lg,
  },
  // button: {
  //   position: 'absolute',
  //   bottom: offsets.large,
  //   right: offsets.large,
  // },
});
