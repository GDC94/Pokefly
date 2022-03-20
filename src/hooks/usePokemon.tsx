import { useEffect, useRef, useState } from "react";
import { Api } from "../API/Api";
import { Pokemon, PokeResponse, Result } from "../interfaces/PokeResponse";

export default function usePokemons() {
  const [pokemones, setPokemones] = useState<Pokemon[]>([]);

  const nextPage = useRef("https://pokeapi.co/api/v2/pokemon?limit=40");

  const load = async () => {
    const response = await Api.get<PokeResponse>(nextPage.current);
    mapResultToSinglePokemon(response.data.results);
  };

  const mapResultToSinglePokemon = (pokemons: Result[]) => {
    const myListPokemons: Pokemon[] = pokemons.map(({ url, name }) => {
      const fraccionarUrl = url.split("/");
      const id = fraccionarUrl[fraccionarUrl.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {
        id,
        name,
        picture,
      };
    });

    setPokemones([...pokemones, ...myListPokemons]);
  };

  useEffect(() => {
    load();
  }, []);

  return {
    pokemones,
    load,
  };
}
