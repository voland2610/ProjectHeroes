import { useEffect, useState } from "react";
import { CharactersList } from "~/widgets/characters-list/ui/CharactersList";
import { useCharacters } from "~/entities/character";

const Characters = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const { data, isLoading, isError } = useCharacters(debouncedValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue.trim());
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const results = data?.results ?? [];

  const renderContent = () => {
    if (isLoading) {
      return <h1>Идет загрузка</h1>;
    }

    if (isError) {
      return <h1>Есть ошибка</h1>;
    }

    if (!results.length) {
      return <h1>По вашему запросу ничего нет</h1>;
    }

    return <CharactersList data={results} />;
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {renderContent()}
    </div>
  );
};

export default Characters;