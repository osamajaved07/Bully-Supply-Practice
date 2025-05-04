import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* ------AppBar------- */}

      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => console.log('Menu clicked')}>
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Notification clicked')}>
          <Ionicons name="notifications-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.locationRow}>
        <Ionicons name="location-outline" size={20} color="#000" />
        <Text style={styles.locationText}>Kansas City, USA</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Find bullies, supplies and more..."
          placeholderTextColor="#9999"
        />
        <View style={styles.searchIconWrapper}>
          <Ionicons name="search" size={20} color="#000" />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '12%',
  },

  appBar: {
    height: '40',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginTop: 18,
  },
  locationText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
    fontWeight: '500',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginTop: 17,
    borderRadius: 12,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#000',
  },

  searchIconWrapper: {
    backgroundColor: '#FFD700', // yellow
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
