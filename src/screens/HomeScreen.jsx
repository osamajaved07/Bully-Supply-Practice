import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => console.log('Menu clicked')}>
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Notification clicked')}>
          <Ionicons name="notifications-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '12%', // for status bar
  },

  appBar: {
    height: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '8%',
  },
});
