import axios from "axios";
import type { CharacterResponse } from "../model/CharacterResponse";

export async function getCharacters(url: string): Promise<CharacterResponse> {
  const response = await axios.get<CharacterResponse>(url);
  return response.data;
}

// TODO: https://axios.rest/pages/advanced/create-an-instance.html
// Вынести в отдельный файл и пользоваться через instance.
// api({
//   url: '/character',
//   params: {
//     page: '',
//     name: ''
//   }
// })
// const API_URL = import.meta.VITE_BASE_APP_URL
// const api = axios.create({
// url: API_URL,
// headers: {
// 'Content-Type': 'application/json'
// }
// })
