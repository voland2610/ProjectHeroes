import { api } from "~/shared/api/api";
import type { CharacterResponse } from "../model/CharacterResponse";

type GetCharactersParams = {
  name: string;
  page: number;
};

export async function getCharacters(
  params: GetCharactersParams
): Promise<CharacterResponse> {
  // TODO | 06.07.2026: URL'ы для запросов тоже можно вынести в отдельные переменные в отдельном файле.
  const response = await api.get<CharacterResponse>("/character", {
    params,
  });

  return response.data;
}
