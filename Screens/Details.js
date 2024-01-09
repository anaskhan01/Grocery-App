import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Dropbox from "../Components/Dropbox";

const Details = ({ route }) => {
  const navigation = useNavigation();
  const { name, price, pieces, img } = route.params.main;

  return (
    <SafeAreaView style={{ flex: 1, gap: 20, backgroundColor: "white" }}>
      <StatusBar backgroundColor="white" />
      <View>
        <Image
          style={{
            resizeMode: "contain",
            height: 300,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
          source={{
            uri: img,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          width: "100%",
          marginTop: 10,
          paddingHorizontal: 15,
        }}
      >
        <Ionicons
          onPress={() => navigation.navigate("Home")}
          name="chevron-back"
          size={24}
          color="black"
        />
        <Ionicons name="share-outline" size={24} color="black" />
      </View>
      <View
        style={{ paddingHorizontal: 15, backgroundColor: "white", flex: 1 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Text>
          <AntDesign name="hearto" size={24} color="black" />
        </View>
        <Text style={{ marginTop: 5, fontSize: 15, color: "gray" }}>
          {pieces}, Price
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 25,
            color: "black",
            fontWeight: "bold",
          }}
        >
          ₹{price}
        </Text>
        <Dropbox />
        <View
          style={{
            flex: 0.9,
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: "#14a484",
              borderRadius: 10,
              height: 70,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: 600 }}>
              Add To Basket
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
