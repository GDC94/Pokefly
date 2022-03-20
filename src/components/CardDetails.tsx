import { StyleSheet, Text, View } from "react-native";
import { PokemonDetails } from "../interfaces/PokeResponse";

interface Props {
  pokemon: PokemonDetails;
}

export default function CardDetails({ pokemon }: Props) {
  const { weight, height } = pokemon;

  return (
    <View
      style={{
        ...styles.viewDetails,
      }}
    >
      <View
        style={{
          ...styles.viewDetailsSecond,
        }}
      >
        <Text
          style={{
            ...styles.textWeight,
          }}
        >
          Peso: {weight} Kg
        </Text>
        <Text style={{ ...styles.textHeight }}>Altura: {height / 10} M</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  viewDetailsSecond: {
    paddingTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textWeight: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  textHeight: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
});
