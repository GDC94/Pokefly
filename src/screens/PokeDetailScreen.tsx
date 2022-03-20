import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CardDetails from "../components/CardDetails";
import { usePokemonDetail } from "../hooks/usePokemonDetail";
import { StackParams } from "../navigator/Navigator";

interface Props extends StackScreenProps<StackParams, "PokeDetailScreen"> {}

export default function PokeDetailScreen({ navigation, route }: Props) {
  const { top } = useSafeAreaInsets();
  const { pokemon } = route.params;
  const { pokemonDetails } = usePokemonDetail(pokemon.id);

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/fondo2.png")}
      resizeMode="cover"
    >
      <View style={{ ...styles.containerDetails, top: top + 20 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          style={{ ...styles.button }}
        >
          <Text style={{ ...styles.arrow }}>←</Text>
          <Image
            source={require("../assets/figma.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        <View
          style={{
            ...styles.view,
          }}
        >
          <Text
            style={{
              ...styles.textName,
            }}
          >
            {pokemon.name}
          </Text>
          <Image
            source={{ uri: pokemon.picture }}
            style={{ width: 250, height: 250 }}
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <CardDetails pokemon={pokemonDetails} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerDetails: {
    flex: 1,
    marginHorizontal: 20,
  },
  button: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  arrow: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  textName: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
});
