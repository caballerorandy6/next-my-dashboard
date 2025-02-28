//rxslice is a shortcut that creates a slice of the store with the necessary actions and reducers
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

// The initial state of the store

// {
//   favorite: {
//      "1": {id: 1, name: "Bulbasaur", },
//      "2": {id: 2, name: "Ivysaur", },
//   }
// }

//Los corchetes [key: string] en la interfaz PokemonState indican que es un índice de tipo dinámico en TypeScript. Esto significa que el objeto puede tener cualquier cantidad de propiedades, siempre que las claves sean de tipo string, y cada una de esas claves almacenará un valor de tipo SimplePokemon.
interface PokemonState {
  favorites: { [key: string]: SimplePokemon };
}

//The getInitialState function retrieves the favorite pokemons from the local storage. If there are no favorite pokemons, it returns an empty object.
const getInitialState = (): PokemonState => {
  //if (typeof localStorage === "undefined") return {}

  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );
  return favorites;
};

const initialState: PokemonState = {
  favorites: {},
  //...getInitialState(),
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },

    toogleFavorite(state, action: PayloadAction<SimplePokemon>) {
      //El método toogleFavorite recibe un estado y una acción. La acción es un objeto que contiene un payload con un objeto SimplePokemon. El método toogleFavorite verifica si el objeto SimplePokemon está en el estado. Si está, lo elimina; si no está, lo agrega. La forma de abajo hace lo mismo, esta es una forma mas entendible

      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      }
      state.favorites[id] = pokemon;

      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toogleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
