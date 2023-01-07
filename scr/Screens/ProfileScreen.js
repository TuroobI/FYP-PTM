import React from 'react';
import { View, Text } from 'react-native';

import Profile from './Profile';
import { profile } from './Profile';

const ProfileScreen = () => {
  return (
    <View>
      <Profile profile={profile} />
    </View>
  );
};

export default ProfileScreen;
