import { CharacterCard } from "../entities/character/ui/CharacterCard";
import {useCharacters} from "~/entities/character";

const Characters = () => {
  const { data, isLoading, isError } = useCharacters();

  if (isLoading) {
    return <h1>Идет загрузка</h1>;
  }

  if (isError) {
    return <h1>Произошла ошибка</h1>;
  }

  return (
    <>
      {data?.results.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          status={character.status}
          image={character.image}
        />
      ))}
    </>
  );
};

export default Characters;
