import { useAppDispatch, useAppSelector } from "~/app/store/hooks";
import { toggleFavorite } from "~/features/favorites/model/favoritesSlice";
import styles from "./charactersCard.module.scss";
import { Link } from "react-router-dom";
import { CHARACTERS_KEY } from "../constants";

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
  const dispatch = useAppDispatch();

  const favorites = useAppSelector((state) => state.favorites);

  const isFavoriteCharacter = favorites.includes(id);

  return (
    <Link to={`/${CHARACTERS_KEY}/${id}`} className={styles.card}>
      <h1 className={styles.cardTitle}>{name}</h1>
      <p className={styles.cardStatus}>{status}</p>

      <div className={styles.cardImgWrapper}>
        <img className={styles.cardImg} src={image} alt={name} />

        <button
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            dispatch(toggleFavorite(id));
          }}
          className={styles.isFavorites}
        >
          {isFavoriteCharacter ? "❤️" : "🤍"}
        </button>
      </div>
    </Link>
  );
};
