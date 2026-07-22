import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getCharacters } from "../api/getCharacters";
import type { CharacterResponse } from "../model/CharacterResponse";
import { CHARACTERS_KEY } from "../constants";

export function useCharacters(search: string, page: number) {
  return useQuery<CharacterResponse>({
    queryKey: [CHARACTERS_KEY, search, page],
    queryFn: () =>
      getCharacters({
        name: search,
        page,
      }),
    placeholderData: keepPreviousData,
  });
}
