import type {Info} from "../model/Info";
import type {Character} from "../model/Character";

export type CharacterResponse = {
  info: Info
  results: Character[]
}