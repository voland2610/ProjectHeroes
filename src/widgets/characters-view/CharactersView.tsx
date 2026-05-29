import { Character } from "~/entities/character/model/Character";
import { CharactersList } from "../characters-list/ui/CharactersList";

interface CharactersViewProps {
  isLoading: boolean;
  isError: boolean;
  results: Character[];
}

export const CharactersView = ({
  isLoading,
  isError,
  results,
}: CharactersViewProps) => {

  if (isLoading) {
    return <h1>Идет загрузка</h1>;
  }

  if (isError) {
    return <h1>Есть ошибка</h1>;
  }

  if (!results.length) {
    return <h1>По вашему запросу ничего нет</h1>;
  }
  return <CharactersList data={results} />;
};
