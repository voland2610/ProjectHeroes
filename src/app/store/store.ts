import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "~/features/favorites/model/favoritesSlice";
import { FAVORITES_KEY } from "./constants";

// TODO | 06.07.2026: Вынести в отдельную переиспользуемую функцию.
const loadInitial = (): number[] => {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
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

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
});

// TODO | 06.07.2026: Вынести типы в отдельный файл.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
