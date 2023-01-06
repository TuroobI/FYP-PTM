import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './scr/Screens/Home';
import CreateaccPage from './scr/Screens/CreateaccPage';
import LoginPage from './scr/Screens/LoginPage';
import Calendar from './scr/Screens/Calendar';


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
            name="CreateaccPage"
            component={CreateaccPage}
          />
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
          />
          <Stack.Screen
            name="Calendar"
            component={Calendar}
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


