import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './src/components/CustomTabBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
