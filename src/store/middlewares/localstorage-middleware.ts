//Como guardar en localstorage el estado de la app

import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);
    if (action.type === "pokemons/toogleFavorite") {
      const { pokemons } = state.getState() as RootState;
      localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
      return;
    }
    //console.log({ state: state.getState() });
  };
};
