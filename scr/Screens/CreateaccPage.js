import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase";

import { withNavigation } from "@react-navigation/core";

const CreateaccPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Calendarr");
      }
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Welcome}> Create New Account </Text>

      <TextInput style={styles.nameinput} placeholder="Name" />

      <TextInput
        style={styles.emailinput}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.passinput}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.signup} onPress={handleSignUp}>
        <Text style={styles.signuptext}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateaccPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Welcome: {
    fontSize: 25,
    fontStyle: "italic",
    fontFamily: "sans-serif-medium",
    color: "Black",
  },
  nameinput: {
    marginTop: 150,
    borderBottomColor: "#9370db",
    borderBottomWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 5,
    height: 50,
    width: 250,
  },

  emailinput: {
    marginTop: 50,
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
  signup: {
    width: "80%",
    borderRadius: 25,
    borderColor: "blue",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    backgroundColor: "#9370db",
  },

  signuptext: {
    fontSize: 25,
    fontStyle: "italic",
    fontFamily: "sans-serif-medium",
    color: "#fff",
  },
});
