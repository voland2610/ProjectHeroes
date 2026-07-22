import { useRef, useEffect, useState } from "react";
import { CharacterSearch } from "~/widgets/character-search/ui/Character-search";
import { CharactersPagination } from "~/features/characters-pagination/Characters-pagination";
import { CharactersView } from "~/widgets/characters-view/CharactersView";
import { useDebounce } from "~/shared/hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
// TODO | 06.07.2026: Расширить конфиг eslint на проверку неиспользуемых
// импортов + добавить Prettier в проект. Посмотреть и добавить husky с
// pre-commit хуками на prettier и eslint прогоны.
import { useCharacters } from "~/entities/character";
import { SEARCH_DELAY } from "./constants";

const Characters = () => {
  const isFirstRender = useRef(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ?? 1);
  const nameFromUrl = searchParams.get("name") ?? "";

  const [inputValue, setInputValue] = useState(nameFromUrl);

  const debouncedValue = useDebounce(inputValue, SEARCH_DELAY);
  const prevSearchRef = useRef(debouncedValue);
  const { data, isLoading, isError } = useCharacters(
    debouncedValue.trim(),
    page,
  );
  useEffect(() => {
    setInputValue(nameFromUrl);
  }, [nameFromUrl]);
  
  useEffect(() => {
    // Данный useRef использую как флажок, для того чтобы знать когда
    // произошел первый рендер, чтобы url лишний раз не менять
  if (isFirstRender.current) {
    isFirstRender.current = false;
    prevSearchRef.current = debouncedValue;
    return;
  }

  const searchChanged = prevSearchRef.current !== debouncedValue;

  if (searchChanged) {
    setSearchParams((prev) => {
      const params = Object.fromEntries(prev);

      return {
        ...params,
        name: debouncedValue,
        page: "1",
      };
    });
  }

  prevSearchRef.current = debouncedValue;
}, [debouncedValue, setSearchParams]);

  function changePage(direction: "next" | "back") {
    setSearchParams((prev) => {
      const params = Object.fromEntries(prev);
      const currentPage = Number(params.page ?? 1);
      const updatedPage =
        direction === "next" ? currentPage + 1 : currentPage - 1;
      return {
        ...params,
        page: String(updatedPage),
      };
      // pagination: (arg: "next" | "back") => void
    });
  }

  const pagesCount = data?.info.pages;
  const results = data?.results ?? [];

  return (
    <div>
      <CharacterSearch
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      {"Страница " + page}
      <CharactersView
        isLoading={isLoading}
        isError={isError}
        results={results}
      />
      {/* Попробовать сделать удобную пагинацию и добавить информацию о странцие внизу. */}
      <CharactersPagination
        disabled={page === 1}
        text={"back"}
        onClick={() => {
          if (page > 1) {
            changePage("back");
          }
        }}
      />
      <CharactersPagination
        disabled={data?.info.pages === page}
        text={"next"}
        onClick={() => {
          if (pagesCount && page < pagesCount) {
            changePage("next");
          }
        }}
      />
      {"Страница " + page}
    </div>
  );
};

export default Characters;
