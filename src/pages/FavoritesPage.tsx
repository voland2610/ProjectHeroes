import { useAppSelector } from "~/app/store/hooks";
import { useCharacters } from "~/entities/character";
import { CharactersView } from "~/widgets/characters-view/CharactersView";

const FavoritesPage = () => {
  const favorites = useAppSelector((state) => state.favorites);

  const { data, isLoading, isError } = useCharacters("", 1);

  // TODO | 06.07.2026: Переделываем на запросе get mupltiple characters.
  const results = data?.results.filter((c) => favorites.includes(c.id)) ?? [];

  if (!favorites.length) {
    return <h2>Нет избранных персонажей</h2>;
  }

  return (
    <div>
      <CharactersView
        isLoading={isLoading}
        isError={isError}
        results={results}
      />
    </div>
  );
};

export default FavoritesPage;
