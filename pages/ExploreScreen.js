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

const ExploreScreen = () => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Welcome to Explore Travello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  authContainer: {
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
});

export default ExploreScreen;
