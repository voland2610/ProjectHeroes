import { useEffect, useState } from "react";
import { useCharacters } from "~/entities/character";
import { CharacterSearch } from "~/widgets/character-search/ui/Character-search";
import { CharactersPagination } from "~/features/characters-pagination/Characters-pagination";
import { CharactersView } from "~/widgets/characters-view/CharactersStateView";
import { useDebounce } from "~/shared/hooks/useDebounce";

const Characters = () => {
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const delay = 500;

  const debouncedValue = useDebounce(inputValue, delay);
  const { data, isLoading, isError } = useCharacters(debouncedValue.trim(), page);

  const results = data?.results ?? [];

  useEffect(() => {
    setPage(1);
  }, [inputValue]);

  const pagesCount = data?.info.pages;

  return (
    <div>
      <CharacterSearch
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      {page}
      <CharactersView
        isLoading={isLoading}
        isError={isError}
        results={results}
      />
      <CharactersPagination
        disabled={page == 1}
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
