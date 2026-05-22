import axios from "axios"
import type { CharacterResponse } from "../model/CharacterResponse";

export async function getCharacters(url: string): Promise<CharacterResponse> {
  const response = await axios.get<CharacterResponse>(url)
  return response.data
}