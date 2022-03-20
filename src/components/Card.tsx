import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Pokemon } from "../interfaces/PokeResponse";

interface Props {
  pokemon: Pokemon;
}
const screenWidth = Dimensions.get("window").width;

export default function Card({ pokemon }: Props) {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate("PokeDetailScreen", { pokemon: pokemon })
      }
      data-test-id="card"
    >
      <View style={{ ...styles.card, width: screenWidth * 0.44 }}>
        <Image style={styles.imagePokemon} source={{ uri: pokemon.picture }} />
        <Text style={styles.namePokemon}>{pokemon.name}</Text>
        <Image
          source={require("../assets/icons8-pokeball-48.png")}
          style={{ width: 20, height: 20 }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginHorizontal: 13,
    color: "#1f8bee",
  },
  subtitle: {
    fontSize: 25,
    marginHorizontal: 13,
  },
  card: {
    borderRadius: 10,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 5,
    height: 120,
    width: 120,
    shadowColor: "#ffffff95",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderWidth: 2,
    borderColor: "#1f8aee7b",
  },
  namePokemon: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "capitalize",
    color: "white",
  },

  imagePokemon: {
    height: 95,
    width: 95,
  },
});
