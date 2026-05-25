import { useEffect, useState } from "react";
import { CharactersList } from "~/widgets/characters-list/ui/CharactersList";
import { useCharacters } from "~/entities/character";
import { CharacterSearch } from "~/widgets/character-search/ui/Character-search";
import { CharactersPagination } from "~/features/characters-pagination/Characters-pagination";

//Вынести renderContent, debounced в отдельные файлы по FSD

const Characters = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useCharacters(debouncedValue, page);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue.trim());
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  useEffect(() => {
    setPage(1);
  }, [inputValue]);

  const results = data?.results ?? [];
  const pagesCount = data?.info.pages; //решить проблему с этой строчкой undefined

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
      <CharacterSearch
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      {page}

      {renderContent()}
      <CharactersPagination
        disabled={1 == page}
        text={"back"}
        onClick={() => {
          if (page > 1) {
            setPage((page) => page - 1); 
          }
        }}
      />
      <CharactersPagination
        disabled={data?.info.pages == page}
        text={"next"}
        onClick={() => {
          if (page < pagesCount) {
            setPage((page) => page + 1); //продумать логику на локальный поиск
          }
        }}
      />
    </div>
  );
};

export default Characters;
