import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "##3a91b1", flex: 1 }}>
        <View style={styles.container}>
          <View
            style={{
              position: "relative",
              zIndex: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Image style={{ width: 200, height: 200 }} source={require('../../navigation/images/2.png')} /> */}
            <TouchableOpacity
              style={{ ...styles.signup, width: 300, height: 75 }}
              onPress={() => this.props.navigation.navigate("CreateaccPage")}
            >
              <Text style={styles.signuptext}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.signin, width: 300, height: 75 }}
              onPress={() => this.props.navigation.navigate("LoginScreen")}
            >
              <Text style={styles.signintext}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "#0a2f3d",
              height: "28%",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              paddingHorizontal: 0,
              position: "absolute",
              zIndex: 1,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 80, height: 80, marginLeft: 300 }}
              source={require("../../navigation/images/2.png")}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    marginLeft: 0,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    padding: 20,
    backgroundColor: "#b0dcec",
    backgroundImage:
      "url(../../../../assets/Снимок экрана 2019-03-08 в 19.32.03.png)",
  },

  signup: {
    width: "80%",
    borderRadius: 25,
    borderColor: "#000000",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#rgba(65,125,145,1)",
    marginTop: 20,
    shadowColor: "#000000", // add a shadow
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5, // add some elevation for Android
    animation: "$pulse 2s infinite", // add a pulse animation
  },

  signuptext: {
    fontSize: 30,
    fontStyle: "italic",
    fontFamily: "sans-serif-medium",
    color: "#fff",
    textShadow: "2px 2px #000000", // add some shadow for depth
  },
  signin: {
    width: "80%",
    borderRadius: 25,
    borderColor: "#000000",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#rgba(65,125,145,1)",
    marginTop: 20,
    shadowColor: "#000000", // add a shadow
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5, // add some elevation for Android
    animation: "$pulse 2s infinite", // add a pulse animation
  },

  signintext: {
    fontSize: 30,
    fontStyle: "italic",
    fontFamily: "sans-serif-medium",
    color: "#fff",
    textShadow: "2px 2px #000000", // add some shadow for depth
  },
  input: {
    width: "80%",
    borderRadius: 25,
    borderColor: "#000000",
    height: 50,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ffffff",
    fontSize: 20,
    borderWidth: 2, // add a border
    borderColor: "#6a85b6", // use a more attractive color
  },
});
