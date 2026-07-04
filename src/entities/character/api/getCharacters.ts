import { api } from "~/shared/api/api";
import type { CharacterResponse } from "../model/CharacterResponse";

type GetCharactersParams = {
  name: string;
  page: number;
};

export async function getCharacters(
  params: GetCharactersParams,
): Promise<CharacterResponse> {
  const response = await api.get<CharacterResponse>("/character", {
    params,
  });

  return response.data;
}
