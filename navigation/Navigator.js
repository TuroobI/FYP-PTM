import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../scr/Screens/Home'
import {Image} from 'react-native'
import LoginPage from '../scr/Screens/LoginPage'
import CreateaccPage from '../scr/Screens/CreateaccPage'
import Calendar from '../scr/Screens/Calendar'
import ProfileScreen from '../scr/Screens/ProfileScreen'
import TasksScreen from '../scr/Screens/TaskScreen'

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"rgba(33,173,216,1)",
                    elevation:2
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("./images/Home.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("./images/Profile.png")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="TasksScreen"
                component={TasksScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("./images/add.jpg")}
                            style={{ height:20, width:20 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="LoginPage" component={BottomTabNavigator}/>
            <Stack.Screen name="CreateaccPage" component={BottomTabNavigator}/>
            <Stack.Screen name="Calendar" component={Calendar}/>
        </Stack.Navigator>
    )
}


export default HomeStackNavigator;