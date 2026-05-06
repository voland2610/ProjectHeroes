import { CharactersList } from "~/widgets/characters-list/ui/CharactersList";
import { useCharacters } from "~/entities/character";
import { useEffect, useState } from "react";

const Characters = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const { data, isLoading, isError } = useCharacters(debouncedValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(inputValue), 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  if (isLoading) {
    return (
      <>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <h1>Идет загрузка</h1>
      </>
    );
  }

  if (isError) {
    return <h1>Произошла ошибка</h1>;
  }

  if (data == undefined) {
    return null;
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <CharactersList data={data.results} />
    </>
  );
};
// убрать дублирование input
// оставить input всегда
// добавить "ничего не найдено"

export default Characters;
