import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "~/features/favorites/model/favoritesSlice";
import { FAVORITES_KEY } from "./constants";
import { getStorageItem, setStorageItem } from "~/shared/storage/localStorage";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  preloadedState: {
    favorites: getStorageItem<number[]>(FAVORITES_KEY, []),
  },
});

store.subscribe(() => {
  const state = store.getState();

  setStorageItem(FAVORITES_KEY, state.favorites);
});
