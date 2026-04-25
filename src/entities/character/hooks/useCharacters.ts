import { useQuery } from "@tanstack/react-query"
import { getCharacters } from "../api/getCharacters.ts"

export function useCharacters() {
  return useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacters("https://rickandmortyapi.com/api/character")
  })
}
