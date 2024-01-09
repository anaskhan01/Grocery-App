import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <View style={{ alignItems: "center", marginBottom: 55, padding: 10}}>
    <FontAwesome5
      name="canadian-maple-leaf"
      size={400}
      color="#14a484"
    />
  </View>
      <Text style={styles.weltext}>Welcome!</Text>
      <Text style={styles.stext}>Let's get started by logging in.</Text>
      <View>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{ width: 150, height: 50 }}
        >
          <Text
            style={{
              backgroundColor: "#14a484",
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 15,
              textAlign: "center",
              padding: 12,
              borderRadius: 5,
            }}
          >
            Login
          </Text>
        </Pressable>
        <Pressable
            style={{ color: "black", marginTop: 25 }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ color: "gray", textAlign: "center",  }}>
              Skip for now
            </Text>
          </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  weltext: {
    color: "gray",
    fontSize: 35,
    fontWeight: 200,
    marginHorizontal: 12,
    marginVertical: 10,
  },
  stext: {
    color: "gray",
    fontWeight: 100,
    marginHorizontal: 12,
  },
});

export default Welcome;
