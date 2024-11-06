import { useNavigation } from 'expo-router';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import ExploreScreen from './ExploreScreen';

const WelcomeScreen = ({ navigation, user, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Welcome to Travello App</Text>
      <Image
        source={require('../assets/images/travel.jpg')}
        style={styles.mainImage}
      ></Image>
      <Button
        title="Explore"
        style={styles.exploreButton}
        onPress={() => navigation.navigate('Explore')}
      ></Button>
      <Text style={styles.userInfo}>User Info</Text>
      <Text style={styles.emailText}>{user.email}</Text>
      <Button title="Logout" onPress={handleAuthentication} color="red" />
    </View>
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
    alignContent: 'center',
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

  userInfo: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  mainImage: {
    width: 280,
    height: 280,
    padding: 0,
    marginBottom: 50,
    alignSelf: 'center',
  },
  exploreButton: {
    backgroundColor: '#FF0000',
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 50,
    paddingVertical: 12,
  },
});

export default WelcomeScreen;
