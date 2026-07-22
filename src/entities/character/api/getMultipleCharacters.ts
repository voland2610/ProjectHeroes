import { api } from "~/shared/api/api";
import type { Character } from "../model/Character";
import { CHARACTERS_URL } from "../constants";

export async function getMultipleCharacters(
  characters_ids: number[],
): Promise<Character[]> {
  const response = await api.get<Character | Character[]>(
    `${CHARACTERS_URL}/${characters_ids.join(",")}`,
  );

  if (!characters_ids.length) {
    return [];
  }

  if (Array.isArray(response.data)) {
    return response.data;
  } else {
    return [response.data];
  }
}
