import {useQuery} from '@apollo/client';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {MissionCard} from '../components/MissionCard';
import {Launches} from '../services/launches';
import {pastLaunches} from '../services/query';

export const Overview = ({navigation}) => {
  const noImage =
    'https://lh3.googleusercontent.com/proxy/fVqqRdlQrKVt1IteGgIkSWrmGa2I1D25DTEazgBUlOby9cT3BFl3WBco6vqSNCykQKLAS2RcmBV3hZQNRTmNpEaslrvteEmXEebG9VNtSYgpD2kwTL6sGSq0wK03CF70';

  function handleDetails(launch: Launches) {
    navigation.navigate('LaunchDetails', {launch});
  }

  const {data: launchesData} = useQuery(pastLaunches, {
    variables: {
      limit: 10,
    },
  });

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.content}>
        {launchesData &&
          launchesData.launchesPast.map((launch: Launches, key) => (
            <MissionCard
              key={launch.mission_name}
              title={launch.mission_name}
              date={launch.launch_date_local.split('T', 1).toString()}
              imageLink={
                launch.links.flickr_images[0] != null
                  ? launch.links.flickr_images[0]
                  : noImage
              }
              nextPage={() => handleDetails(launch)}
            />
          ))}
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
