import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const ExploreScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.authContainer}>
        <Text style={styles.title}>Welcome to Explore Travello</Text>

        <View style={styles.card}>
          <Image
            source={require('../assets/images/beach.jpg')}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Beautiful Beaches</Text>
          <Text style={styles.description}>
            Enjoy the sunny beaches with crystal clear water.
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../assets/images/mountain.jpeg')}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Mountain Adventures</Text>
          <Text style={styles.description}>
            Experience the thrill of mountain hiking.
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../assets/images/mountain.jpeg')}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>City Lights</Text>
          <Text style={styles.description}>
            Discover the vibrant city nightlife.
          </Text>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../assets/images/city.jpg')}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Forest Retreat</Text>
          <Text style={styles.description}>
            Escape into the tranquility of the lush green forests.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  authContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 36,
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    elevation: 3,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default ExploreScreen;
