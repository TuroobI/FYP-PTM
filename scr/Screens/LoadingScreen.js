import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Home from './Home';
import App from '../../App';
import HomeStackNavigator from '../../navigation/Navigator';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Display loading screen for 3 seconds
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Image source={require('../../navigation/images/2.png')} />
        <Text style={styles.text}>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  else {
    
      return <HomeStackNavigator/>;
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoadingScreen;