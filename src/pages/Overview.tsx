import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {MissionCard} from '../components/MissionCard';
// import api from '../services/api';

export const Overview = ({navigation}) => {
  function handleDetails() {
    navigation.navigate('LaunchDetails');
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.content}>
        <MissionCard
          title="Starlink-15 (v1.0)"
          date="2020-10-24T11:31:00-04:00"
          imageLink="https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg"
          nextPage={handleDetails}
        />
        <MissionCard
          title="Crew-1"
          date="2020-10-24T11:31:00-04:00"
          imageLink="https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg"
          nextPage={handleDetails}
        />
        <MissionCard
          title="GPS III SV04 (Sacagawea)"
          date="2020-10-24T11:31:00-04:00"
          imageLink="https://live.staticflickr.com/65535/50617626408_fb0bba0f89_o.jpg"
          nextPage={handleDetails}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    backgroundColor: '#030425',
  },
});
