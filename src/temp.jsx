// import React from 'react';
// import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// const BullyAdoptionScreen = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Hero Section */}
//       <View style={styles.heroContainer}>
//         <Text style={styles.heroTitle}>Give A Bully</Text>
//         <Text style={styles.heroSubtitle}>A Loving Home</Text>
//         <Text style={styles.heroText}>They Will return the love unconditionally. Adopt today and make the difference.</Text>
//       </View>

//       {/* Divider */}
//       <View style={styles.divider} />

//       {/* Categories Section */}
//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionTitle}>EXPLORE POPULAR CATEGORIES</Text>

//         <View style={styles.categoryContainer}>
//           <Text style={styles.categoryTitle}>Bullies</Text>
//           <Text style={styles.categorySubtitle}>Core & Services</Text>
//         </View>
//       </View>

//       {/* Our Bullies Section */}
//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionTitle}>OUR BULLIES</Text>

//         {/* Bully Card 1 */}
//         <View style={styles.bullyCard}>
//           <Image
//             source={{ uri: 'https://example.com/pomeranian-white.jpg' }}
//             style={styles.bullyImage}
//           />
//           <View style={styles.bullyInfo}>
//             <Text style={styles.bullyName}>MO231 - Pomeranian White</Text>
//             <Text style={styles.bullyCategory}>Category: Bully</Text>
//             <Text style={styles.bullyPrice}>$ 6.900.000</Text>
//           </View>
//         </View>

//         {/* Bully Card 2 */}
//         <View style={styles.bullyCard}>
//           <Image
//             source={{ uri: 'https://example.com/pomeranian.jpg' }}
//             style={styles.bullyImage}
//           />
//           <View style={styles.bullyInfo}>
//             <Text style={styles.bullyName}>MO231 - Pomerani</Text>
//             <Text style={styles.bullyCategory}>Category: Bully</Text>
//             <Text style={styles.bullyPrice}>$ 6.900.000</Text>
//           </View>
//         </View>
//       </View>

//       {/* Adopt Button */}
//       <TouchableOpacity style={styles.adoptButton}>
//         <Text style={styles.adoptButtonText}>ADOPT NOW</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   heroContainer: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   heroTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   heroSubtitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 15,
//   },
//   heroText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 24,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#eee',
//     marginVertical: 20,
//     marginHorizontal: 20,
//   },
//   sectionContainer: {
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   categoryContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   categoryTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   categorySubtitle: {
//     fontSize: 16,
//     color: '#666',
//   },
//   bullyCard: {
//     flexDirection: 'row',
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   bullyImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginRight: 15,
//   },
//   bullyInfo: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   bullyName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   bullyCategory: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
//   bullyPrice: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#e74c3c',
//   },
//   adoptButton: {
//     backgroundColor: '#e74c3c',
//     padding: 15,
//     borderRadius: 8,
//     margin: 20,
//     alignItems: 'center',
//   },
//   adoptButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default BullyAdoptionScreen;
