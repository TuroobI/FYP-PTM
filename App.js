import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./scr/Screens/LoadingScreen";


class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <LoadingScreen/>
      </NavigationContainer>
    );
  }
}


export default App;
