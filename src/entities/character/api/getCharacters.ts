import axios from "axios"
import type {Info} from "../model/Info.ts";
import type {Character} from "../model/Character.ts";

interface CharacterResponse {
  info: Info
  results: Character[]
}

export async function getCharacters(url: string): Promise<CharacterResponse> {
  const response = await axios.get<CharacterResponse>(url)
  return response.data
}