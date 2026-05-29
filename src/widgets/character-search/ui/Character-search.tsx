import { ChangeEventHandler } from "react";
import styles from "./character-search.module.scss"

interface CharacterSearchProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const CharacterSearch = ({ value, onChange }: CharacterSearchProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search character..."
      value={value}
      onChange={onChange}
    />
  );
};


