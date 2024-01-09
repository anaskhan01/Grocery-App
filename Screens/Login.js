import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.backview}>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <FontAwesome5 name="canadian-maple-leaf" size={50} color="#14a484" />
        </View>
        <Text style={styles.textwelcome}>Let's Login!</Text>
        <TextInput
          style={styles.finput}
          placeholder="Email address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          style={styles.sinput}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <Pressable>
          <Text style={styles.btn}>Login</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Signup")}
          style={{ color: "white", marginTop: 25 }}
        >
          <Text style={{ color: "gray", textAlign: "center" }}>
            Don't have an account? Sign up
          </Text>
        </Pressable>
        <Pressable
          style={{ color: "black", marginTop: 15 }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "gray", textAlign: "center" }}>Skip Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14a484",
    alignItems: "center",
    justifyContent: "center",
  },
  textwelcome: {
    color: "gray",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "400",
  },
  backview: {
    backgroundColor: "#fff",
    width: 350,
    height: 450,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 25,
    padding: 20,
  },
  finput: {
    color: "lightgray",
    marginTop: 25,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 2,
    padding: 10,
    borderWidth: 2,
    borderColor: "lightgray",
    borderRadius: 5,
  },
  sinput: {
    color: "lightgray",
    marginTop: 10,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 2,
    padding: 10,
    borderWidth: 2,
    borderColor: "lightgray",
    borderRadius: 5,
  },
  btn: {
    backgroundColor: "#14a484",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 25,
    marginTop: 25,
    padding: 12,
    borderRadius: 2,
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 1,
  },
});
