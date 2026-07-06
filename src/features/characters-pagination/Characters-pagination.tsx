import styles from "./characters-pagination.module.scss";

interface CharactersPaginationProps {
  disabled: boolean;
  text: "next" | "back";
  onClick: () => void;
}
export const CharactersPagination = ({
  disabled,
  onClick,
  text,
}: CharactersPaginationProps) => (
  <button className={styles.button} disabled={disabled} onClick={onClick}>
    {text}
  </button>
);
