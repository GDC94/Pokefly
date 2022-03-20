import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import { Pokemon } from "../interfaces/PokeResponse";
import PokeDetailScreen from "../screens/PokeDetailScreen";
import SearchScreen from "../screens/SearchScreen";

export type StackParams = {
  HomeScreen: undefined;
  PokeDetailScreen: { pokemon: Pokemon };
  SearchScreen: undefined;
};
const Stack = createStackNavigator<StackParams>();
export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#05132e",
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="PokeDetailScreen" component={PokeDetailScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}
