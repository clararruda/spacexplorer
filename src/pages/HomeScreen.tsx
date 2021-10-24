// import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const HomeScreen = ({navigation}) => {
  function handleTap() {
    navigation.navigate('Overview');
  }

  return (
    <TouchableOpacity style={styles.content} onPress={handleTap}>
      <Text style={styles.title}>SPACEXPLORER</Text>
      <Text style={styles.subtitle}>tap to open</Text>
      <Image
        style={styles.logo}
        source={require('../assets/undraw_To_the_stars_qhyy.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#030425',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    color: '#6C63FF',
  },
  logo: {
    width: 350,
    height: 350,
  },
});
