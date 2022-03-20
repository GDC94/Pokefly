import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import Card from "../components/Card";
import usePokemons from "../hooks/usePokemon";

export default function Home() {
  const { top } = useSafeAreaInsets();
  const { pokemones, load } = usePokemons();
  const navigation = useNavigation<any>();
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/fondo.png")}
      resizeMode="cover"
    >
      <View
        style={{
          top: top + 20,
          ...styles.viewHomeContainer,
        }}
      >
        <View
          style={{
            ...styles.view,
          }}
        >
          <Image
            source={require("../assets/figma.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text
            style={{
              ...styles.titleHome,
            }}
          >
            Pokefly
          </Text>
          <Text
            style={{
              ...styles.subtitle,
            }}
          >
            El buscador de pokemones
          </Text>
        </View>
        <FlatList
          data={pokemones}
          numColumns={2}
          keyExtractor={(pokemon) => String(pokemon.id)}
          renderItem={({ item }) => <Card pokemon={item} />}
          onEndReached={load}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View
        style={{
          ...styles.viewButton,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("SearchScreen")}
          style={{
            ...styles.touchable,
          }}
        >
          <Text style={{ fontSize: 33, color: "white" }}>🔎</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  viewHomeContainer: {
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleHome: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 5,
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f8bee",
  },
  viewButton: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  touchable: {
    zIndex: 1000,
    width: 67,
    height: 67,
    backgroundColor: "#017bee",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#ffffff",
  },
});
