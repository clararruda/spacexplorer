/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button, Card} from 'react-native-elements';
// import api from '../services/api';

interface Props {
  title: string;
  date: string;
  imageLink: string;
  nextPage: any;
}

export function MissionCard({title, date, imageLink, nextPage}: Props) {
  return (
    <>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>{title}</Card.Title>
        {/* <Card.Divider /> */}
        <Card.Image
          source={{
            uri: imageLink,
          }}
        />
        <Text style={styles.date}>Launch date: {date}</Text>
        <Button
          buttonStyle={styles.button}
          title="DETAILS"
          onPress={nextPage}
        />
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 300,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
  date: {
    textAlign: 'center',
    color: '#000000',
    margin: 10,
  },
  button: {
    backgroundColor: '#6C63FF',
  },
});
