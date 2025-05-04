import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

const CustomTabBarButton = ({children, onPress, accessibilityState}) => {
  const focused = accessibilityState?.selected ?? false;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPress}>
      <View style={[styles.inner, focused && styles.focused]}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8B1339',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  focused: {
    backgroundColor: '#FFE066', // for example, yellow highlight when active
  },
});

export default CustomTabBarButton;
