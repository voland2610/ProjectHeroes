import { useAppSelector } from "~/app/store/hooks";
import { useMultipleCharacters } from "~/entities/character";
import { CharactersView } from "~/widgets/characters-view/CharactersView";

const FavoritesPage = () => {
  const favorites = useAppSelector((state) => state.favorites);

  const { data, isLoading, isError } = useMultipleCharacters(favorites);

  if (!favorites.length) {
    return <h2>Нет избранных персонажей</h2>;
  }

  return (
    <div>
      <CharactersView
        isLoading={isLoading}
        isError={isError}
        results={data ?? []}
      />
    </div>
  );
};

export default FavoritesPage;
