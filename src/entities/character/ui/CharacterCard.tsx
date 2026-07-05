import { useFavorites } from "~/features/favorites/model/useFavorites";
import styles from "./charactersCard.module.scss";

interface CharacterCardProps {
  name: string;
  status: string;
  image: string;
  id: number;
  
}

export const CharacterCard = ({
  name,
  status,
  image,
  id,
}: CharacterCardProps) => {
  const { favorites,addFavorite, removeFavorite, isFavorite } = useFavorites();
  console.log("favorites:", favorites);
  return (
    <div className={styles.card}>
      <h1 className={styles.cardTitle}>{name}</h1>
      <p className={styles.cardStatus}>{status}</p>
      <div className={styles.cardImgWrapper}>
        <img className={styles.cardImg} src={image} alt={name} />
        <span
          onClick={() =>
            !isFavorite(id) ? addFavorite(id) : removeFavorite(id)
          }
          className={styles.isFavorites}
        >
          {!isFavorite(id) ? "🤍" : "❤️"}
        </span>
      </div>
    </div>
  );
};
