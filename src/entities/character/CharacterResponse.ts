import type { Character } from "./Character"
import type { Info } from "./Info"

export interface CharacterResponse {
  info: Info
  results: Character[]
}