import { CharactersList } from "~/widgets/characters-list/ui/CharactersList";
import {useCharacters} from "~/entities/character";

const Characters = () => {
  const { data, isLoading, isError } = useCharacters();

  if (isLoading) {
    return <h1>Идет загрузка</h1>;
  }

  if (isError) {
    return <h1>Произошла ошибка</h1>;
  }

  if (data != null) {
    return <CharactersList data={data.results}/>
  }
};

export default Characters;
