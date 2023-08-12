import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ColorPalette");
        }}
      >
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};
