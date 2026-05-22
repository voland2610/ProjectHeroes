import { useEffect, useState } from "react";
import { CharactersList } from "~/widgets/characters-list/ui/CharactersList";
import { useCharacters } from "~/entities/character";

const Characters = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useCharacters(debouncedValue, page);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue.trim());
      setPage(1)
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
      {page}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {renderContent()}

      <button
        onClick={() => {
          if (page > 1) {
            setPage((page) => page - 1);
          }
        }}
      >
        back
      </button>
      <button
        onClick={() => {
          if (page < 42) {
            setPage((page) => page + 1);
          }
        }}
      >
        next
      </button>
    </div>
  );
};

export default Characters;
