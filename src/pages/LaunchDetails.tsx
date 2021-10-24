import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ImageCarousel} from '../components/ImageCarousel';
import {ListItem} from '../components/ListItem';
import {RoundedButton} from '../components/RoundedButton';

export const LaunchDetails = ({route}) => {
  const {launch} = route.params;

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.content}>
        <Text style={styles.title}>{launch.mission_name}</Text>
        <ImageCarousel images={launch.links.flickr_images} />
        <ListItem
          icon="rocket"
          iconSize={30}
          text={launch.rocket.rocket_name}
        />
        <ListItem
          icon="calendar"
          iconSize={30}
          text={launch.launch_date_local.split('T', 1).toString()}
        />
        <View style={styles.row_wrapper}>
          <View style={styles.column_wrapper}>
            <RoundedButton url={launch.links.article_link} icon="link" />
            <Text style={styles.subtitle}>Article</Text>
          </View>
          <View style={styles.column_wrapper}>
            <RoundedButton
              url={launch.launch_site.site_name_long}
              icon="map-marker"
            />
            <Text style={styles.subtitle}>Location</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#030425',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  subtitle: {
    color: '#FFFFFF',
  },
  row_wrapper: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  column_wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
