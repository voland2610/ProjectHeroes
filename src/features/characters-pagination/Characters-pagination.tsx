import styles from "./characters-pagination.module.scss";

interface CharactersPaginationProps {
  disabled: boolean;
  text: "next" | "back";
  // TODO: Можно использовать такую типизацию.
  onClick: () => void;
}
export const CharactersPagination = ({
  disabled,
  onClick,
  text,
}: CharactersPaginationProps) => {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};
