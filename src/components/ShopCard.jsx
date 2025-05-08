import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native-svg';

const {width, height} = Dimensions.get('window');

const ShopCard = () => {
  return (
    <View style={styles.productcard}>
      <ImageBackground
        source={require('../../assets/images/cardbg.png')}
        style={styles.productCardImage}
        imageStyle={{borderRadius: 15}}>
        <View style={styles.overlay}>
          {/* Text section on the left */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Give A Bully A Loving Home</Text>
            <Text style={styles.description}>
              They will return the love unconditionally. Adopt today and make
              the difference.
            </Text>
          </View>

          {/* Image on the right */}
          <Image
            source={require('../../assets/images/product1.png')}
            style={styles.sideImage}
            resizeMode="cover"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ShopCard;

const styles = StyleSheet.create({
  productcard: {
    marginHorizontal: width * 0.04,
    marginTop: height * 0.01,
    paddingRight: '10%',
    width: width * 0.8,
    marginBottom: height * 0.5,
  },
  productCardImage: {
    // width: width - 30,
    height: height * 0.165,
    borderRadius: 15,
    // overflow: 'hidden',
    // justifyContent: 'space-between',
  },
  overlay: {
    flexDirection: 'row',
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    // borderRadius: 15,
    // alignItems: 'center',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    paddingRight: '10%',
    paddingTop: '4%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    color: '#E0E4E8',
    fontSize: 10,
    paddingTop: '2%',
  },
  sideImage: {
    width: '40%',
    height: '100%',
    borderRadius: 10,
  },
});
