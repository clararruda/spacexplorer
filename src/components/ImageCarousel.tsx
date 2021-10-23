/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  images: any;
}

export function ImageCarousel({images}: Props) {
  const noImage =
    'https://lh3.googleusercontent.com/proxy/fVqqRdlQrKVt1IteGgIkSWrmGa2I1D25DTEazgBUlOby9cT3BFl3WBco6vqSNCykQKLAS2RcmBV3hZQNRTmNpEaslrvteEmXEebG9VNtSYgpD2kwTL6sGSq0wK03CF70';
  const [shouldShowAngle, setShouldShowAngle] = useState(true);
  const [currentImage, setCurrentImage] = useState(noImage);

  useEffect(() => {
    if (images.length > 0) {
      setCurrentImage(images[0]);
      if (images.length === 1) {
        setShouldShowAngle(false);
      }
    } else {
      setShouldShowAngle(false);
    }
  }, []);

  const handleImage = (img: string) => {
    var currentImgIndex = images.indexOf(img);
    if (currentImgIndex < images.length) {
      setCurrentImage(images[currentImgIndex + 1]);
      if (currentImgIndex + 1 > 2) {
        setCurrentImage(images[0]);
      }
    }
  };

  return (
    <View style={styles.row_wrapper}>
      {shouldShowAngle && (
        <TouchableOpacity
          style={styles.touch_icon}
          onPress={() => handleImage(currentImage)}>
          <Icon name="angle-left" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      )}
      <Image
        style={styles.img}
        source={{
          uri: currentImage,
        }}
      />
      {shouldShowAngle && (
        <TouchableOpacity
          style={styles.touch_icon}
          onPress={() => handleImage(currentImage)}>
          <Icon name="angle-right" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    margin: 10,
    borderRadius: 10,
    width: 285,
    height: 300,
  },
  touch_icon: {
    borderRadius: 50,
    width: 35,
    height: 35,
    alignItems: 'center',
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    margin: -20,
    position: 'relative',
  },
  row_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
