
import React from "react";
import { View,StyleSheet } from "react-native";
import Footer from "./Footer";

class Calendar extends React.Component{
  render(){
    return(
      <View style={styles.container}> 
      <Footer/>
    </View>

    );
  }
}

export default Calendar;


const styles= StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  }})