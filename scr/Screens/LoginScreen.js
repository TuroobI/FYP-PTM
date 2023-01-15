//import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../Firebase";
import { withNavigation } from "@react-navigation/core";
import Calendarr from "./Calendar";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("HomeScreen");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          navigation.replace("Calendarr")
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Welcome Back </Text>
      <TextInput style={styles.emailinput} placeholder="Email" value={email}
      onChangeText={(text) => setEmail(text)}/>
      
      <TextInput style={styles.passinput} placeholder="Password" value={password}
      onChangeText={(text) => setPassword(text)} />
     
      <TouchableOpacity
        style={styles.signin}
        onPress={handleLogin}>
        <Text style={styles.signintext}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
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
