import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "~/features/favorites/model/favoritesSlice";

const loadInitial = (): number[] => {
  try {
    const raw = localStorage.getItem("favorites");
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  preloadedState: {
    favorites: loadInitial(),
  },
});

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem(
    "favorites",
    JSON.stringify(state.favorites)
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;