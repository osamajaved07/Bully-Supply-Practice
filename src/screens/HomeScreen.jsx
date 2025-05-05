import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const bulliesData = [
    {
      id: 1,
      name: 'MO231 - Pomeranian White',
      Category: 'Bully',
      price: '$ 6.900.000',
      image: require('../../assets/bully/bully1.png'),
    },
    {
      id: 2,
      name: 'MO231 - Pomeranian White',
      Category: 'Bully',
      price: '$ 6.900.000',
      image: require('../../assets/bully/bully2.png'),
    },
    {
      id: 3,
      name: 'MO231 - Pomeranian White',
      Category: 'Bully',
      price: '$ 6.900.000',
      image: require('../../assets/bully/bully3.png'),
    },
    {
      id: 4,
      name: 'MO231 - Pomeranian White',
      Category: 'Bully',
      price: '$ 6.900.000',
      image: require('../../assets/bully/bully4.png'),
    },
    {
      id: 5,
      name: 'MO231 - Pomeranian White',
      Category: 'Bully',
      price: '$ 6.900.000',
      image: require('../../assets/bully/bully2.png'),
    },
    {
      id: 6,
      name: 'MO231 - Pomeranian White',
      Category: 'Bully',
      price: '$ 6.900.000',
      image: require('../../assets/bully/bully3.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.backgroundBox} />

        {/* ------AppBar------- */}

        <View style={styles.appBar}>
          <TouchableOpacity onPress={() => console.log('Menu clicked')}>
            <Ionicons name="menu" size={28} color="#E0E4E8" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Notification clicked')}>
            <Ionicons name="notifications-outline" size={28} color="#E0E4E8" />
          </TouchableOpacity>
        </View>

        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={20} color="#E0E4E8" />
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
        <LinearGradient colors={['#8B1339', '#25050F']} style={styles.card}>
          <View style={styles.cardText}>
            <Text style={styles.cardHeading}>Give Bully A Loving Home</Text>
            <Text style={styles.cardDescription}>
              They will return the love unconditionally. Adopt today and make
              the difference.
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
            <Text style={styles.categoryText}>Food & Supplements</Text>
            <View style={[styles.semiCircle, {backgroundColor: '#0B1E3E'}]} />
          </View>
        </View>

        {/* Our Bullies Section */}

        <View style={styles.rowHeader}>
          <Text style={styles.rowTitle}>our bullies</Text>
          <Text style={styles.rowAction}>See All</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}>
          {/* {[...Array(6)].map((_, index) => (
            <View key={index} style={styles.itemBox}>
              <Image
                source={require('../../assets/images/dogpic.png')}
                style={styles.itemImage}
              />
              <Text style={styles.itemText}>Bully #{index + 1}</Text>
              <Text style={styles.itemText}>2 Months Old</Text>
              <Text style={styles.itemText}>Available Now</Text>
            </View>
          ))} */}
          {bulliesData.map(bully => (
            <View key={bully.id} style={styles.itemBox}>
              <Image source={bully.image} style={styles.itemImage} />
              <Text style={styles.itemText1}>{bully.name}</Text>
              <Text style={styles.itemText1}>{bully.Category}</Text>
              <Text style={styles.itemText2}>{bully.price}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContent: {
    paddingTop: '5%',
    paddingBottom: '30%',
  },
  container: {
    // flex: 1,
    // paddingTop: '5%',
    // backgroundColor:"#FFFFFF"
  },

  backgroundBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '24%', // Adjust based on how much of the screen it should cover
    backgroundColor: '#0B1E3E',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    zIndex: -1,
  },

  appBar: {
    // height: '40',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
    marginTop: 18,
  },
  locationText: {
    fontSize: 16,
    color: '#E0E4E8',
    marginLeft: 5,
    fontWeight: '500',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '4%',
    marginTop: 17,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
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
    color: '#99A2A5',
  },

  searchIconWrapper: {
    backgroundColor: '#FFD166', // yellow
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: '16%',
    flexDirection: 'row',
    // position: 'relative',
    // justifyContent: 'space-between',
    // paddingLeft: 15,
    justifyContent: 'flex-start',
    // overflow: 'hidden',
    // alignItems: 'flex-start',
    borderRadius: 10,
    marginHorizontal: '4%',
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
    width: '72%',
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
    marginHorizontal: '4%',
    marginTop: 25,
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: '4%',
  },

  categoryBox: {
    width: '47%', // 2 boxes per row with spacing
    aspectRatio: 1.3,
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
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 25,
  },
  semiCircle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderTopLeftRadius: 40,
    zIndex: -1,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '4%',
    marginTop: 12,
    marginBottom: 4,
  },

  rowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'uppercase',
  },

  rowAction: {
    fontSize: 14,
    color: '#0B1E3E',
    fontWeight: '600',
  },

  horizontalScroll: {
    paddingHorizontal: '4%',
    paddingRight: '142%',
    paddingTop: '2%',
  },

  itemBox: {
    marginBottom: '10%',
    width: '24%',
    height: 180,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginRight: 12,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // padding: 10,
    justifyContent: 'flex-start',
  },

  itemImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
    // borderRadius: 8,
    marginBottom: 8,
  },

  itemText1: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#333',
    marginBottom: 2,
    paddingLeft: 12,
  },
  itemText2: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#8B1339',
    marginBottom: 2,
    paddingLeft: 12,
  },
});
