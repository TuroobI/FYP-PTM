import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CalendarScreen from "./Calendar";

class LoginPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Welcome Back </Text>

        <TextInput style={styles.emailinput} placeholder="Email" />

        <TextInput style={styles.passinput} placeholder="Password" />

        <TouchableOpacity
          style={styles.signin}
          onPress={() => this.props.navigation.navigate("CalendarScreen")}
        >
          <Text style={styles.signintext}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 25,
    fontStyle: "italic",
    fontFamily: "sans-serif-medium",
    color: "Black",
  },

  emailinput: {
    marginTop: 150,
    borderBottomColor: "#9370db",
    borderBottomWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 5,
    height: 50,
    width: 250,
  },
  passinput: {
    marginTop: 50,
    borderWidth: 0,
    borderBottomColor: "#9370db",
    borderBottomWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 5,
    height: 50,
    width: 250,
  },
  signin: {
    width: "80%",
    borderRadius: 25,
    borderColor: "#1e90ff",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    backgroundColor: "#9370db",
  },

  signintext: {
    fontSize: 25,
    fontStyle: "italic",
    fontFamily: "sans-serif-medium",
    color: "#fff",
  },
});
