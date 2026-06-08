import styles from "./charactersCard.module.scss";

interface CharacterCardProps {
  name: string;
  status: string;
  image: string;
}

// TODO: Можно вынести в shared/ui компонент Card, а для каждой сущности создавать отдельные компоненты в entities/.../ui.
// Можно делать короткие return'ы.
export const CharacterCard = ({ name, status, image }: CharacterCardProps) => (
  <div className={styles.card}>
    <h1 className={styles.cardTitle}>{name}</h1>
    <p className={styles.cardStatus}>{status}</p>
    <img className={styles.cardImg} src={image} alt={name} />
  </div>
);
