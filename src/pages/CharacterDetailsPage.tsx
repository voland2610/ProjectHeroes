import { useNavigate, useParams } from "react-router-dom";
import { useCharacter } from "~/entities/character";
import { useAppDispatch, useAppSelector } from "~/app/store/hooks";
import { toggleFavorite } from "~/features/favorites/model/favoritesSlice";
import styles from "./CharacterDetailsPage.module.scss";

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const characterId = Number(id);

  const { data, isLoading, isError } = useCharacter(characterId);

  const favorites = useAppSelector((state) => state.favorites);

  if (isLoading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (isError) {
    return <h1>Не удалось загрузить персонажа</h1>;
  }

  if (!data) {
    return <h1>Персонаж не найден</h1>;
  }

  const isFavorite = favorites.includes(data.id);

  return (
    <div className={styles.page}>
      <button
        type="button"
        className={styles.backButton}
        onClick={() => navigate(-1)}
      >
        ← Назад
      </button>

      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={data.image} alt={data.name} />
        </div>

        <div className={styles.info}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{data.name}</h1>

            <button
              type="button"
              className={styles.favoriteButton}
              aria-label={
                isFavorite ? "Удалить из избранного" : "Добавить в избранное"
              }
              onClick={() => dispatch(toggleFavorite(data.id))}
            >
              {isFavorite ? "❤️" : "🤍"}
            </button>
          </div>

          <p className={styles.status}>
            Status: <span>{data.status}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
