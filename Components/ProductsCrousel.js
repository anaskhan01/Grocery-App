import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { fruits } from "./Data";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductsCrousel = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", {
                main: item,
              })
            }
            style={{
              height: 250,
              borderWidth: 2,
              borderColor: "#E3E3E3",
              width: 190,
              marginRight: 10,
              borderRadius: 15,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            <Image
              style={{ height: 125, resizeMode: "contain", }}
              source={{ uri: item.img }}
            />
            <View style={{ paddingHorizontal: 10, gap: 3 }}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
              <Text style={{ color: "grey" }}>{item.pieces} Priceg</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text style={{ marginLeft: 8, fontSize: 20, fontWeight: "bold" }}>
              ₹{item.price}
              </Text>
              <FontAwesome
                style={{ marginRight: 10, marginTop: 4 }}
                name="plus-square"
                size={35}
                color="#14a484"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductsCrousel;

const styles = StyleSheet.create({});
