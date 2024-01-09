import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const Cart = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: "white",
        gap: 15,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: 500 }}>
        My Cart
      </Text>

      <View
        style={{
          height: 150,
          borderBottomColor: "#e3e3e3",
          borderBottomWidth: 2,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{ flex: 0.35, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{ height: 120, width: 120, resizeMode: "cover" }}
            source={{
              uri: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
            }}
          />
        </View>
        <View
          style={{
            flex: 0.7,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Fresh Red Apple
            </Text>
            <AntDesign
              name="close"
              size={24}
              color="gray"
              onPress={() => console.log("clicked")}
            />
          </View>
          <Text style={{ color: "gray", marginTop: 5 }}>1 kg, Price</Text>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <AntDesign name="pluscircleo" size={24} color="#14a484" />
              <Text>1</Text>
              <AntDesign name="minuscircleo" size={24} color="gray" />
            </View>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>$4.99</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
