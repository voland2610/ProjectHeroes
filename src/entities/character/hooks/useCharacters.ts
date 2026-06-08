import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getCharacters } from "../api/getCharacters";
import type { CharacterResponse } from "../model/CharacterResponse";

export function useCharacters(search: string, page: number) {
  return useQuery<CharacterResponse>({
    queryKey: ["characters", search, page],
    queryFn: () =>
      getCharacters(
        `https://rickandmortyapi.com/api/character?&name=${search}&page=${page}`
      ),
    placeholderData: keepPreviousData,
  });
}
