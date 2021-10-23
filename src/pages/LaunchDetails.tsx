import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const LaunchDetails = () => {
  return (
    <View style={styles.content}>
      <Text>Welcome to LaunchDetails</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#030425',
    alignItems: 'center',
  },
});
