// Данный файл ни влияет не на что (ради учебной цели был разработан)
import { useEffect, useState } from "react";

const getInitialFavorites = (): number[] => {
  try {
    const raw = localStorage.getItem("favorites");
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const useFavorites = () => {
  const [favorite, setFavorite] = useState<number[]>(getInitialFavorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  function addFavorite(id: number) {
    if (!favorite.includes(id)) {
      setFavorite((prev) => [...prev, id]);
    }
  }

  function removeFavorite(id: number) {
    setFavorite((prev) => prev.filter((heroId) => heroId !== id));
  }

  function isFavorite(id: number) {
    return favorite.includes(id);
  }

  function toggleFavorite(id: number) {
    if(favorite.includes(id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }

  return {
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  };
};