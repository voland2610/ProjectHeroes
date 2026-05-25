import { ChangeEventHandler } from "react";

interface CharacterSearchProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const CharacterSearch = ({ value, onChange }: CharacterSearchProps) => {
  return (
    <input
      type="text"
      placeholder="Search character..."
      value={value}
      onChange={onChange}
    />
  );
};


