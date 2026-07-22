import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const initialState: number[] = loadInitial();

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const id = action.payload;

      const exists = state.includes(id);

      if (exists) {
        return state.filter((item) => item !== id);
      }

      state.push(id);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;