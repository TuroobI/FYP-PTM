import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./scr/Screens/Home";
import CreateaccPage from "./scr/Screens/CreateaccPage";
import LoginPage from "./scr/Screens/LoginPage";
import Calendar from "./scr/Screens/Calendar";
import HomeStackNavigator from "./navigation/Navigator";

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <HomeStackNavigator>
        </HomeStackNavigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#rgba(140,216,240,1)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
