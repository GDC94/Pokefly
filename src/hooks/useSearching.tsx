import { useEffect, useState } from "react";
import { Api } from "../API/Api";
import { Pokemon, PokeResponse, Result } from "../interfaces/PokeResponse";

export default function useSearching() {
  const [searching, setSearching] = useState(true);
  const [pokemones, setPokemones] = useState<Pokemon[]>([]);

  const load = async () => {
    const response = await Api.get<PokeResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=1150"
    );
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

    setPokemones(myListPokemons);
    setSearching(false);
  };

  useEffect(() => {
    load();
  }, []);

  return {
    pokemones,
    searching,
  };
}
