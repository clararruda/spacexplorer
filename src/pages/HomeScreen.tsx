// import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {useQuery} from '@apollo/client';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {pastLaunches} from '../services/query';
import Context from '../contexts/Context';

export const HomeScreen = ({navigation}) => {
  const {setStorage: setStorage} = useContext(Context);

  function handleTap() {
    setStorage({
      favorite: [],
      launches: launchesData,
    });
    navigation.navigate('Overview');
  }

  const {data: launchesData} = useQuery(pastLaunches, {
    variables: {
      limit: 10,
      sort: 'launch_date_local',
      order: 'desc',
    },
  });

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
