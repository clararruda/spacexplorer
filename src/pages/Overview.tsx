// import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {MissionCard} from '../components/Card';
// import api from '../services/api';

export const Overview = ({navigation}) => {
  // const navigation = useNavigation();

  function handleDetails() {
    navigation.navigate('LaunchDetails');
  }

  return (
    <View style={styles.content}>
      <ScrollView>
        <MissionCard
          title="Starlink-15 (v1.0)"
          date="2020-10-24T11:31:00-04:00"
          imageLink="https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg"
          nextPage={handleDetails}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#030425',
  },
});
