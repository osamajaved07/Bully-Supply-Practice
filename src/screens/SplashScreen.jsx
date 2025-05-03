import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       navigation.replace('Home'); // assuming you go to Home after splash
  //     }, 3000); // 3 seconds

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Bully Supply</Text>
      {/* <LottieView
        source={require('./assets/animations/loading.json')}
        autoPlay
        loop
        style={{width: 200, height: 200}}
      /> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: '100%',
    // padding: '4%',
    backgroundColor: 'red',
    // paddingTop: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});
