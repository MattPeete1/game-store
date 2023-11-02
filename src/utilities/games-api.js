import sendRequest from "./send-request";
const BASE_URL = 'https://project-4-diyd.onrender.com/api/games';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }
  

