// import React, { Component } from 'react';
// import {View,StyleSheet } from "react-native";
// import Home from './scr/Screens/Home';
// import LoginPage from './scr/Screens/LoginPage';




// export default class Ptm_app extends Component{
// render(){
// return (
//   <View style= {styles.container}>
//   <Home/>
  
// <LoginPage/>

//   </View>
  
// );

// }}







// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     color: 'White',
//     textAlign: 'center',
 
//   }
// })


import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './scr/Screens/Home';
import CreateaccPage from './scr/Screens/CreateaccPage';
import LoginPage from './scr/Screens/LoginPage';



const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
          />
           <Stack.Screen
            name="Create Account Page"
            component={CreateaccPage}
          />
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;


