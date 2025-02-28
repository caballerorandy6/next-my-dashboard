import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
//import { localStorageMiddleware } from "./middlewares/localstorage-middleware";

import counterReducer from "./counter/counterSlice";
import pokemonsReducer from "./pokemons/pokemonsSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, pokemons: pokemonsReducer },
  // middleware: (getDefaultMiddleware: any) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
