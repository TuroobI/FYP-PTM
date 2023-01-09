
import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


class CreateaccPage extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style= {styles.Welcome}> Create New Account </Text>

        <TextInput 
        style= {styles.nameinput}
        placeholder="Name" />

        <TextInput 
        style= {styles.emailinput}
        placeholder="Email" />

<TextInput 
        style= {styles.passinput}
        placeholder="Password" />


<TouchableOpacity style={styles.signup} onPress={()=>this.props.navigation.navigate('Calendarr')}>
          <Text style={styles.signuptext}>Sign Up</Text> 
        </TouchableOpacity>
        </View> 
      
    );
  }
}
export default CreateaccPage;




const styles= StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
Welcome:{
  fontSize: 25,
  fontStyle: "italic",
  fontFamily: "sans-serif-medium",
  color: "Black",
},
nameinput:{
  marginTop: 150,
  borderBottomColor: "#9370db",
  borderBottomWidth:2,
  paddingHorizontal: 8,
  paddingVertical: 5,
  height:50,
  width: 250,

},

emailinput:{
  marginTop: 50,
  borderBottomColor: "#9370db",
  borderBottomWidth:2,
  paddingHorizontal: 8,
  paddingVertical: 5,
  height:50,
  width: 250,

},
passinput:{
marginTop: 50,
borderWidth: 0,
borderBottomColor: "#9370db",
borderBottomWidth:2,
paddingHorizontal: 8,
paddingVertical: 5,
height:50,
width: 250,

},
signup:{
    width: "80%",
      borderRadius: 25,
      borderColor: "blue",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 100,
      backgroundColor: "#9370db",
},

signuptext:{
  fontSize: 25,
  fontStyle: "italic",
  fontFamily: "sans-serif-medium",
  color: "#fff",
}


})