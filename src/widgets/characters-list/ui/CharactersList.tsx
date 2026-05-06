import { Character } from "~/entities/character/model/Character";
import { CharacterCard } from "~/entities/character/ui/CharacterCard";

interface CharacterListProps {
    data: Character[];
}

export const CharactersList = ({data}: CharacterListProps) => {
  return (
    <>
      {data.map((character) => (
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
