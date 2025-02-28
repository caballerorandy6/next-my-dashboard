"use client";

import { useState, useMemo, useEffect } from "react";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import NoFavorites from "./NoFavorites";
import { setFavoritePokemons } from "@/store/pokemons/pokemonsSlice";

const FavoritePokemons = () => {
  //En este caso favoritePokemons es un objeto con los pokemons favoritos no un array, necesitamos convertirlo a un array para que funcione con PokemonGrid
  // Convertimos el objeto en un array y utilizamos useMemo para que solo se ejecute cuando cambie el objeto favoritePokemons y no haya innecesarias renderizaciones
  const favoritePokemons = useAppSelector((state) => state.pokemons.favorites);
  const favoritesPokemonsArray = useMemo(
    () => Object.values(favoritePokemons),
    [favoritePokemons]
  );
  //console.log(favoritePokemons);

  //Para cuando le de click al botón de favoritos y no se borren los pokemons creo un estado con el valor de favoritePokemons ya que en el useState el valor inicial nunca cambia
  // const [pokemons] = useState(favoritesPokemonsArray);

  // useEffect(() => {
  //   setFavoritePokemons(favoritePokemons);
  // }, [favoritePokemons]);

  return (
    <>
      {favoritesPokemonsArray.length > 0 ? (
        <PokemonGrid pokemons={favoritesPokemonsArray} />
      ) : (
        <NoFavorites />
      )}
    </>
  );
};

export default FavoritePokemons;
