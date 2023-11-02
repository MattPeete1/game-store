import sendRequest from "./send-request";
const BASE_URL = 'https://project-4-diyd.onrender.com/api/users';

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
