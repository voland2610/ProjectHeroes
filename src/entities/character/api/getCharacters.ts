import { api } from "~/shared/api/api";
import type { CharacterResponse } from "../model/CharacterResponse";
import { CHARACTERS_URL } from "../constants";

type GetCharactersParams = {
  name: string;
  page: number;
};

export async function getCharacters(
  params: GetCharactersParams,
): Promise<CharacterResponse> {
  const response = await api.get<CharacterResponse>(CHARACTERS_URL, {
    params,
  });

  return response.data;
}
