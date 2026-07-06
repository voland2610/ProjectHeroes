import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "~/features/favorites/model/favoritesSlice";

// TODO | 06.07.2026: Вынести в отдельную переиспользуемую функцию.
const loadInitial = (): number[] => {
  try {
    // TODO | 06.07.2026: Ключ лучше вынести в отдельную переменную.
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

  localStorage.setItem("favorites", JSON.stringify(state.favorites));
});

// TODO | 06.07.2026: Вынести типы в отдельный файл.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
