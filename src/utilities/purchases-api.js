import sendRequest from './send-request';

const BASE_URL = 'https://project-4-q1m9.onrender.com/api/purchases';

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addGameToCart(gameId) {
  return sendRequest(`${BASE_URL}/cart/games/${gameId}`, 'POST');
}

export function setGameQtyInCart(gameId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { gameId, newQty });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}
