import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { styles } from "./Styles/Styling";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, ColorPalette } from "./Screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPallete" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
