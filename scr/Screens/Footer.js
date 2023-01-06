import React from 'react';
import { View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';



const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Icon style={styles.icon} name="add" color="black" />
      {/* <Image source={require('./icons/search.png')} style={styles.icon} />
      <Image source={require('./icons/settings.png')} style={styles.icon} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 650,
    width: 500,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    height: 60,
    bottom: 0,
  },


  icon: {
    width: 30,
    height: 30,
    alignItems: 'left',
  },
});

export default Footer;
