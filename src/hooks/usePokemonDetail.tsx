import { useEffect, useState } from "react";
import { Api } from "../API/Api";
import { PokemonDetails } from "../interfaces/PokeResponse";

export const usePokemonDetail = (id: string) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>(
    {} as PokemonDetails
  );

  const loadPokemon = async () => {
    const resp = await Api.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    setPokemonDetails(resp.data);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    pokemonDetails,
  };
};
