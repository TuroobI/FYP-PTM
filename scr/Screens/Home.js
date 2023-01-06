import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';


class Home extends React.Component{
  render(){
      return (
        <View style={styles.container}>
          <Image source = {require("C:/Users/ND.COM/ptm_app/assets/logo.jpg")}/> 
  
          <TouchableOpacity style={styles.signup} onPress={()=>this.props.navigation.navigate('CreateaccPage')}>
          <Text style={styles.signuptext}>Sign Up</Text> 
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.signin} onPress={()=>this.props.navigation.navigate('LoginPage')}>
          <Text style={styles.signintext}>Sign In</Text> 
        </TouchableOpacity>
          </View> 
        
      );
  }
}


export default Home;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 40,
    },

   signup:{
    width: "80%",
      borderRadius: 25,
      borderColor: "#000000",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
      backgroundColor: "#9370db",
      marginTop: 150,
   },
    
   signuptext:{
    fontSize: 25,
    fontStyle: "italic",
    fontFamily: "sans-serif-medium",
    color: "#fff"
   },
   signin:{
    width: "80%",
      borderRadius: 25,
      borderColor: "#000000",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
      backgroundColor: "#9370db",
   },
    
   signintext:{
    fontSize: 25,
    fontStyle: "italic",
    fontFamily: "sans-serif-medium",
    color: "#fff"
   },
  });
  
  
  