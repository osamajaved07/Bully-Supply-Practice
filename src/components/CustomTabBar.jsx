// components/CustomTabBar.jsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SellScreen from '../screens/SellScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const CustomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIcon: ({focused}) => {
          let iconName = '';

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'Sell':
              iconName = 'add';
              break;
            case 'Chat':
              iconName = 'chatbubble-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
          }

          return (
            <View style={styles.tabItem}>
              {focused ? (
                <View style={styles.activeIconOuterWrapper}>
                  <View style={styles.blueCircle} />
                  <View style={styles.activeIconWrapper}>
                    <Ionicons name={iconName} size={30} color="yellow" />
                  </View>
                </View>
              ) : (
                <Ionicons name={iconName} size={28} color="#ccc" />
              )}
              {/* <Text
                style={[styles.label, {color: focused ? '#fff' : '#ccc'}]}
                numberOfLines={1}>
                {label}
              </Text> */}
            </View>
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Sell" component={SellScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    height: '8%',
    backgroundColor: '#0B1E3E',
    flexDirection: 'row',
    borderTopWidth: 0,
    elevation: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarLabel: {
    fontSize: 12,
    marginTop: 3,
    color: '#EAEAEA',
  },
  activeIconOuterWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28, // increased float effect
  },
  blueCircle: {
    position: 'absolute',
    width: 68,
    height: 68,
    borderRadius: 40,
    backgroundColor: '#0B1E3E',
    zIndex: -1,
  },
  activeIconWrapper: {
    backgroundColor: '#8B1339',
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default CustomTabBar;
