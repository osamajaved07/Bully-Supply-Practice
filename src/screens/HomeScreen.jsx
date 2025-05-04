import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

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

      {/* Search Container */}

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

      {/* Card */}
      <LinearGradient colors={['#C2185B', '#25050F']} style={styles.card}>
        <View style={styles.cardText}>
          <Text style={styles.cardHeading}>Give Bully A Loving Home</Text>
          <Text style={styles.cardDescription}>
            They will return the love unconditionally. Adopt today and make the
            difference.
          </Text>
        </View>

        <Image
          source={require('../../assets/images/dogpic.png')}
          style={styles.cardImage}
        />
      </LinearGradient>

      {/* Explore Section */}

      <Text style={styles.exploreTitle}>Explore Popular Categories</Text>

      <View style={styles.categoryGrid}>
        <View style={styles.categoryBox}>
          <View style={[styles.semiCircle, {backgroundColor: '#8B1339'}]} />
          <Text style={styles.categoryText}>Bullies</Text>
        </View>
        <View style={[styles.categoryBox, {backgroundColor: '#8B1339'}]}>
          <View style={[styles.semiCircle, {backgroundColor: '#0B1E3E'}]} />
          <Text style={styles.categoryText}>Supplies</Text>
        </View>
        <View style={styles.categoryBox}>
          <View style={[styles.semiCircle, {backgroundColor: '#8B1339'}]} />
          <Text style={styles.categoryText}>Care & Services</Text>
        </View>
        <View style={[styles.categoryBox, {backgroundColor: '#8B1339'}]}>
          <Text style={styles.categoryText}>Food & {'\n'}Supplements</Text>
          <View style={[styles.semiCircle, {backgroundColor: '#0B1E3E'}]} />
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
    // backgroundColor:"#FFFFFF"
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
  card: {
    height: '18%',
    flexDirection: 'row',
    // position: 'relative',
    // justifyContent: 'space-between',
    paddingLeft: 15,
    justifyContent: 'flex-start',
    // overflow: 'hidden',
    // alignItems: 'flex-start',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginTop: 30,
    // padding: 15,
    paddingHorizontal: 15,
    // paddingVertical: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  cardText: {
    // flex: 1,
    // paddingRight: 0,
    zIndex: 2,
    width: '80%',
    paddingTop: 20,
  },

  cardHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingBottom: 18,
  },

  cardDescription: {
    fontSize: 14,
    color: '#E0E4E8',
    lineHeight: 20,
  },

  cardImage: {
    position: 'absolute',
    right: 0,
    top: -8,
    width: '58%',
    height: '135%',
    zIndex: 1,
    opacity: 0.95,
    // borderRadius: 10,
    resizeMode: 'contain',
    opacity: 0.95,
  },
  exploreTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: '5%',
    marginTop: 25,
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },

  categoryBox: {
    width: '47%', // 2 boxes per row with spacing
    aspectRatio: 1.1,
    backgroundColor: '#0B1E3E',
    borderRadius: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 18,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  semiCircle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderTopLeftRadius: 40,
    zIndex: 1,
  },
});
