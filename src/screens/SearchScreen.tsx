import { useNavigation } from "@react-navigation/native";
import useSearch from "../hooks/useSearching";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input } from "../components/Input";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { Pokemon } from "../interfaces/PokeResponse";

export default function SearchScreen() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  const { searching, pokemones } = useSearch();
  const [searchUser, setSearchUser] = useState("");
  const [pokemonsFilter, setPokemonFilter] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (searchUser.length === 0) {
      return setPokemonFilter([]);
    } else {
      setPokemonFilter(
        pokemones.filter((pokemon) =>
          pokemon.name
            .toLocaleLowerCase()
            .includes(searchUser.toLocaleLowerCase())
        )
      );
    }
  }, [searchUser]);

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/fondo.png")}
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

        {searching ? (
          <View>
            <ActivityIndicator size={60} color="#0b45e2" />
            <Text style={{ fontSize: 20, color: "white" }}>Cargando...</Text>
          </View>
        ) : (
          <View style={{ paddingBottom: 10 }}>
            <Input userSearch={(value) => setSearchUser(value)} />
            <Text
              style={{
                ...styles.resultados,
              }}
            >
              Resultados para:
              {"\n" + '"' + searchUser + '"'}
            </Text>
          </View>
        )}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <FlatList
            data={pokemonsFilter}
            numColumns={2}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <Card pokemon={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  button: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
  },
  resultados: {
    marginHorizontal: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  arrow: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
