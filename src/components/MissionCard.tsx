import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  title: string;
  date: string;
  imageLink: string;
  nextPage: any;
}

export function MissionCard({title, date, imageLink, nextPage}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.cardImage}
          source={{
            uri: imageLink,
          }}
        />
        <View style={styles.row_wrapper}>
          <Icon name="calendar" size={15} color="#6C63FF" />
          <Text style={styles.date}>{date}</Text>
        </View>
        <Button color="#6C63FF" title="DETAILS" onPress={nextPage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '85%',
    marginBottom: 40,
  },
  card: {
    borderRadius: 10,
    height: 300,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  cardImage: {
    borderRadius: 10,
    height: 180,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  date: {
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
  },
  row_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
