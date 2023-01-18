import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../scr/Screens/Home";
import Hometwo from "../scr/Screens/Hometwo";
import { Image } from "react-native";
import LoginPage from "../scr/Screens/LoginPage";
import CreateaccPage from "../scr/Screens/CreateaccPage";
import CalendarScreen from "../scr/Screens/Calendar";
import ProfileScreen from "../scr/Screens/ProfileScreen";
import TasksScreen from "../scr/Screens/TaskScreen";
import LoadingScreen from "../scr/Screens/LoadingScreen";
import LoginScreen from "../scr/Screens/LoginScreen";
import HomeScreen from "../scr/Screens/HomeScreen";
import CustomHeader from "../scr/Screens/CustomHeader";
import { auth } from "../Firebase";

//import { auth } from "../../Firebase";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "#061b22",
          elevation: 2,
        },
      }}
    >      
    <Tab.Screen
    name="Home"
    component={Home}
    options={{
      tabBarLabel: "",
      tabBarIcon: ({ color, size }) => (
        <Image
          source={require("./images/Home.png")}
          style={{ height: 20, width: 20 }}
        />
      ),
      headerShown: false,
    }}
  />
      <Tab.Screen
        name="Calendar Screen"
        component={CalendarScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./images/images.png")}
              style={{ height: 20, width: 20 }}
            />
          ),
          headerShown: true,
        }}
      />

      <Tab.Screen
        name="Profile Screen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./images/Profile.png")}
              style={{ height: 20, width: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks Screen"
        component={TasksScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./images/add.jpg")}
              style={{ height: 20, width: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const screenOptionStyle = {
  header: (props) => <CustomHeader {...props} />,
  //headerShown: false,
  headerShown: true,
};

const HomeStackNavigator = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      }
    });

    return unsubscribe;
  }, []);
  if (loggedIn) {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="CalendarScreen" component={BottomTabNavigator} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CreateaccPage" component={CreateaccPage} />
        <Stack.Screen name="CustomHeader" component={CustomHeader} />
        <Stack.Screen name="Hometwo" component={Hometwo} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreateaccPage" component={CreateaccPage} />
        <Stack.Screen name="CalendarScreen" component={BottomTabNavigator} />
        <Stack.Screen name="CustomHeader" component={CustomHeader} />
        <Stack.Screen name="Hometwo" component={Hometwo} />
      </Stack.Navigator>
    );
  }
};

export default HomeStackNavigator;
