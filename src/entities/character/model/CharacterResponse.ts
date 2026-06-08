import type { Info } from "../model/Info";
import type { Character } from "../model/Character";

export type CharacterResponse = {
  info: Info;
  results: Character[];
};

export type Response<B> = {
  info: Info;
  results: B[];
};

// Можно сделать переиспользуемый дженерик.
// type Characeter = Response<{}, {}>
