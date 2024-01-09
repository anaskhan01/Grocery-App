import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "./Data";
import { AntDesign } from "@expo/vector-icons";
const Dropbox = () => {
  const [myIndex, setmyIndex] = useState();
  const [toggle, setToggle] = useState(false)
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={Dropdown}
        renderItem={({ item, index }) => (
          <View>
            <Pressable
              onPress={() => {
                setmyIndex(index);
                setToggle(!toggle)
              }}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: "#e3e3e3",
                borderBottomWidth: 2,
                marginBottom: 10,
                paddingVertical: 15,
              }}
            >
              <Text>{item.title}</Text>
              <AntDesign name={myIndex == index && toggle? "down": "right"} size={24} color="black" />
            </Pressable>
            {myIndex == index && toggle? <Text>{item.content}</Text>: null}
          </View>
        )}
      />
    </View>
  );
};

export default Dropbox;
