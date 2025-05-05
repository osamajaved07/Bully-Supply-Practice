import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import FastImage from 'react-native-fast-image';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container]}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.centerImage}
        resizeMode="contain"
      />

      <FastImage
        source={require('../../assets/animations/dog.gif')}
        style={styles.gifStyle}
      />
      <View style={styles.bottomContainer}>
        <Image
          source={require('../../assets/images/bottom.png')}
          style={styles.bottomImage}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: '100%',
    // padding: '4%',
    backgroundColor: '#0B1E3E',
    // paddingTop: '10%',
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerImage: {
    width: '100%',
    height: '24%',
    marginBottom: 20,
  },
  gifStyle: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomImage: {
    width: '100%',
    height: 155,
    resizeMode: 'cover',
  },
});
