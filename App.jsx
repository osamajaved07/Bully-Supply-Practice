import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';
import SellScreen from './src/screens/SellScreen';
import ChatScreen from './src/screens/ChatScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomTabBarButton from './src/components/CustomTabBar';
import CustomTabBar from './src/components/CustomTabBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const BottomTabs = () => (
//   <Tab.Navigator
//     screenOptions={({route}) => ({
//       headerShown: false,
//       // tabBarActiveTintColor: '#0B1E3E',
//       // tabBarInactiveTintColor: 'gray',
//       tabBarStyle: {
//         height: 60,
//         backgroundColor: 'white',
//         borderTopLeftRadius: 15,
//         borderTopRightRadius: 15,
//         position: 'absolute',
//       },

//       tabBarIcon: ({focused, color}) => {
//         let iconName;
//         switch (route.name) {
//           case 'Home':
//             iconName = focused ? 'home' : 'home-outline';
//             break;
//           case 'Search':
//             iconName = focused ? 'search' : 'search-outline';
//             break;
//           case 'Sell':
//             iconName = focused ? 'add' : 'add-outline';
//             break;
//           case 'Chat':
//             iconName = focused ? 'chatbubble' : 'chatbubble-outline';
//             break;
//           case 'Profile':
//             iconName = focused ? 'person' : 'person-outline';
//             break;
//         }
//         return <Ionicons name={iconName} size={28} color={color} />;
//       },
//     })}>
//     <Tab.Screen name="Home" component={HomeScreen} />
//     <Tab.Screen name="Search" component={SearchScreen} />
//     <Tab.Screen name="Sell" component={SellScreen} />
//     <Tab.Screen name="Chat" component={ChatScreen} />
//     <Tab.Screen name="Profile" component={ProfileScreen} />
//   </Tab.Navigator>
// );
const BottomTabs = CustomTabBar;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
