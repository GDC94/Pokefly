import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import { useFilterValues } from "../hooks/useFilterValues";

interface Props {
  userSearch: (value: string) => void;
}

export const Input = ({ userSearch }: Props) => {
  const [value, setValue] = useState("");
  const filterValues = useFilterValues(value);
  useEffect(() => {
    userSearch(filterValues);
  }, [filterValues]);

  return (
    <View style={{ ...styles.view }}>
      <Text style={{ ...styles.title }}>Buscador</Text>
      <View style={styles.textBackground}>
        <TextInput
          style={{
            ...styles.textInput,
          }}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={setValue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },

  textBackground: {
    backgroundColor: "#000002",
    borderRadius: 10,

    height: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#007df1",
    borderWidth: 3,
  },
  textInput: {
    flex: 1,
    fontSize: 19,
    color: "white",
  },
});
