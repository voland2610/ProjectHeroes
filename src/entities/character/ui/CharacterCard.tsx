import styles from "./charactersCard.module.scss";

interface CharacterCardProps {
  name: string;
  status: string;
  image: string;
}

export const CharacterCard = ({ name, status, image }: CharacterCardProps) => (
  <div className={styles.card}>
    <h1 className={styles.cardTitle}>{name}</h1>
    <p className={styles.cardStatus}>{status}</p>
    <img className={styles.cardImg} src={image} alt={name} />
  </div>
);
