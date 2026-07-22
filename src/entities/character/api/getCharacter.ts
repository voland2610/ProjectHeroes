import { api } from "~/shared/api/api";
import type { Character } from "../model/Character";
import { CHARACTERS_URL } from "../constants";

export async function getCharacter(id: number): Promise<Character> {
  const response = await api.get<Character>(`${CHARACTERS_URL}/${id}`);

  return response.data;
}
