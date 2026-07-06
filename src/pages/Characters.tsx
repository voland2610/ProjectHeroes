import { useEffect, useRef, useState } from "react";
// import { useCharacters } from "~/entities/character";
import { CharacterSearch } from "~/widgets/character-search/ui/Character-search";
import { CharactersPagination } from "~/features/characters-pagination/Characters-pagination";
import { CharactersView } from "~/widgets/characters-view/CharactersView";
import { useDebounce } from "~/shared/hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
// TODO | 06.07.2026: Расширить конфиг eslint на проверку неиспользуемых
// импортов + добавить Prettier в проект. Посмотреть и добавить husky с
// pre-commit хуками на prettier и eslint прогоны.
import { Header } from "~/widgets/header/Header";
import { useCharacters } from "~/entities/character";

const Characters = () => {
  // const isFirstRender = useRef(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ?? 1);
  const nameFromUrl = searchParams.get("name") ?? "";

  const [inputValue, setInputValue] = useState(nameFromUrl);
  // const prevNameRef = useRef(nameFromUrl);
  const delay = 500;
  const debouncedValue = useDebounce(inputValue, delay);

  const { data, isLoading, isError } = useCharacters(
    debouncedValue.trim(),
    page
  );

  // useEffect(() => {
  //   setInputValue(nameFromUrl);
  // }, [nameFromUrl]);

  // TODO | 06.07.2026: Проверить необходимость.
  // Сделать sync между поиском и URL Search Params.
  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     prevNameRef.current = debouncedValue;
  //     return;
  //   }

  //   setSearchParams((prev) => {
  //     const params = Object.fromEntries(prev);

  //     return {
  //       ...params,
  //       name: debouncedValue,
  //     };
  //   });

  //   prevNameRef.current = debouncedValue;
  // }, [debouncedValue]);

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
          // TODO | 06.07.2026: Сделать отдельной функцией и переиспользовать.
          if (page > 1) {
            setSearchParams((prev) => {
              const params = Object.fromEntries(prev);
              const currentPage = Number(params.page ?? 1);

              return {
                ...params,
                page: String(currentPage - 1),
              };
              // pagination: (arg: "next" | "back") => void
            });
          }
        }}
      />
      <CharactersPagination
        disabled={data?.info.pages === page}
        text={"next"}
        onClick={() => {
          if (pagesCount && page < pagesCount) {
            setSearchParams((prev) => {
              const params = Object.fromEntries(prev);
              const currentPage = Number(params.page ?? 1);

              return {
                ...params,
                page: String(currentPage + 1),
              };
            });
          }
        }}
      />
    </div>
  );
};

export default Characters;
