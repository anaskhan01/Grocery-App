import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ProductsCrousel from "../Components/ProductsCrousel";
import { fruits, vegetables } from "../Components/Data";

const Home = () => {
  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 25 }}>
        <FontAwesome5 name="canadian-maple-leaf" size={50} color="#14a484" />
      </View>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          borderColor: "#14a484",
          borderWidth: 2,
          borderRadius: 10,
          margin: 20,
          padding: 12,
        }}
      >
        <AntDesign name="search1" size={24} color="#14a484" />
        <TextInput
          style={{ fontSize: 15, color: "gray", height: 25 }}
          placeholder="Search Store"
        ></TextInput>
      </Pressable>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Image
            style={{ width: 400, height: 150, margin: 5, borderRadius: 15 }}
            source={require("../assets/bannersec.jpg")}
          />
          <Image
            style={{ width: 400, height: 150, margin: 5, borderRadius: 15 }}
            source={require("../assets/bannerthi.jpg")}
          />
          <Image
            style={{ width: 400, height: 150, margin: 5, borderRadius: 15 }}
            source={require("../assets/bannerfir.jpg")}
          />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: 600 }}>
          Exclusive Offer
        </Text>
        <Pressable>
          <Text
            style={{
              marginRight: 15,
              marginTop: 6,
              fontSize: 16,
              color: "#14a484",
            }}
          >
            See all
          </Text>
        </Pressable>
      </View>

      <ProductsCrousel data={fruits}/>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text style={{ marginLeft: 15, fontSize: 20, fontWeight: 600 }}>
          Best Deal
        </Text>
        <Pressable>
          <Text
            style={{
              marginRight: 15,
              marginTop: 6,
              fontSize: 16,
              color: "#14a484",
            }}
          >
            See all
          </Text>
        </Pressable>
      </View>
      <ProductsCrousel data={vegetables}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
