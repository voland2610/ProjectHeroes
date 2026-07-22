import { useQuery } from "@tanstack/react-query";
import { getMultipleCharacters } from "../api/getMultipleCharacters";
import type { Character } from "../model/Character";
import { CHARACTERS_KEY, MULTIPLE_CHARACTERS_KEY } from "../constants";

export function useMultipleCharacters(characters_ids: number[]) {
  return useQuery<Character[]>({
    queryKey: [CHARACTERS_KEY, MULTIPLE_CHARACTERS_KEY, characters_ids],
    queryFn: () => getMultipleCharacters(characters_ids),
    enabled: characters_ids.length > 0,
  });
}
