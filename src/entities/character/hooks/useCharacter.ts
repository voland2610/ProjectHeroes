import { useQuery } from "@tanstack/react-query";
import { getCharacter } from "../api/getCharacter";
import { CHARACTERS_KEY } from "../constants";
import type { Character } from "../model/Character";

export function useCharacter(id: number) {
  return useQuery<Character>({
    queryKey: [CHARACTERS_KEY, id],
    queryFn: () => getCharacter(id),
    enabled: id > 0,
  });
}