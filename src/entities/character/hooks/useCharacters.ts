import { useQuery } from "@tanstack/react-query"
import { getCharacters } from "../api/getCharacters.ts"

export function useCharacters(search: string) {
  return useQuery({
    queryKey: ["characters", search],
    queryFn: () => getCharacters(`https://rickandmortyapi.com/api/character?name=${search}`)
  })
}
