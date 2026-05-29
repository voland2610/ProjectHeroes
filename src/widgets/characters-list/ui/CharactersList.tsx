import { Character } from "~/entities/character/model/Character";
import { CharacterCard } from "~/entities/character/ui/CharacterCard";
import styles from "./charactersList.module.scss"

interface CharacterListProps {
    data: Character[];
}

export const CharactersList = ({data}: CharacterListProps) => {
  return (
    <div className={styles.cards}>
      {data.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          status={character.status}
          image={character.image}
        />
      ))}
      
    </div>
  );
};
