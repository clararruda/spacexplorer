import React, {useContext} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {MissionCard} from '../components/MissionCard';
import Context from '../contexts/Context';
import {Launches} from '../services/launches';

export const Overview = ({navigation}) => {
  const {storage, setStorage} = useContext(Context);
  const noImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
  function handleDetails(launch: Launches) {
    navigation.navigate('LaunchDetails', {launch});
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.content}>
        {storage &&
          storage.launches.launchesPast.map((launch: Launches) => (
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
