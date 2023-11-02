import sendRequest from "./send-request";
const BASE_URL = 'https://project-4-q1m9.onrender.com/api/users';

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
