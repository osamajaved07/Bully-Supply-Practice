import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

const CustomMenuButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.lineFull} />
      <View style={styles.lineHalf} />
      <View style={styles.lineFull} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 6,
  },
  lineFull: {
    width: 24,
    height: 3,
    backgroundColor: '#EAEAEA',
    marginVertical: 2,
    borderRadius: 2,
  },
  lineHalf: {
    width: 14,
    height: 3,
    backgroundColor: '#EAEAEA',
    marginVertical: 2,
    borderRadius: 2,
  },
});

export default CustomMenuButton;
