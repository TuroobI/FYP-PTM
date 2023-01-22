import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { auth } from "../../Firebase";

const Profile = ({ profile }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: profile.avatar }} />
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.header}>Interests:</Text>
      <View style={styles.interestsContainer}>
        {profile.interests.map(interest => (
          <Text key={interest} style={styles.interest}>{interest}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interest: {
    fontSize: 16,
    marginRight: 10,
    marginBottom: 10,
  },
});


export const profile = {
    avatar: 'https://www.logomyway.com/logos_new/11812/a3_307111737174.jpg',
    name: auth.currentUser?.email,
    interests: ['travel', 'bikes', 'sports'],
  };

export default Profile;

