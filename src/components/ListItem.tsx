import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  icon: string;
  iconSize: number;
  text: string;
}

export function ListItem({icon, iconSize, text}: Props) {
  return (
    <View style={styles.row_wrapper}>
      <Icon name={icon} size={iconSize} color="#6C63FF" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row_wrapper: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});
