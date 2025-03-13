import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import React from "react";

const getPokemons = async (
  limit = 151,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2) ?? "",
    name: pokemon.name ?? "",
  }));

  return pokemons;
};

const PagePokemons = async () => {
  const pokemons = await getPokemons();

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokémons</span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};
export default PagePokemons;
