import { MouseEventHandler } from "react";

interface CharactersPaginationProps {
    disabled: boolean;
    text: "next" | "back";
    onClick: MouseEventHandler<HTMLButtonElement>
}
export const CharactersPagination = ({disabled, onClick ,text}: CharactersPaginationProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>{text}</button>
  );
};


