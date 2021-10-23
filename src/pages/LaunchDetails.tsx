import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ImageCarousel} from '../components/ImageCarousel';
import {ListItem} from '../components/ListItem';
import {RoundedButton} from '../components/RoundedButton';
export const LaunchDetails = () => {
  const supportedURL = 'https://google.com';

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.content}>
        <Text style={styles.title}>Mission: Starlink-15 (v1.0)</Text>
        <ImageCarousel
          images={[
            'https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg',
            'https://live.staticflickr.com/65535/50617626408_fb0bba0f89_o.jpg',
            'https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg',
          ]}
        />
        <ListItem icon="rocket" iconSize={30} text="Falcon 9" />
        <ListItem icon="calendar" iconSize={30} text="2020-10-24" />
        <View style={styles.row_wrapper}>
          <RoundedButton url={supportedURL} icon="link" />
          <RoundedButton url={supportedURL} icon="map-marker" />
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
  row_wrapper: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
  },
});
