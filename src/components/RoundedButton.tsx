import React, {useCallback} from 'react';
import {Alert, Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  icon: string;
  url: string;
}

export function RoundedButton({url, icon}: Props) {
  const handlePress = useCallback(async () => {
    if (url === null) {
      Alert.alert('No link available');
    } else {
      if (icon === 'link') {
        await Linking.openURL(url);
      } else {
        await Linking.openURL(
          `https://www.google.com/search?q=${url.replace(' ', '+')}`,
        );
      }
    }
  }, [icon, url]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.rounded_icon}>
        <Icon name={icon} size={40} color="#FFFFFF" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rounded_icon: {
    borderRadius: 50,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C63FF',
  },
});
