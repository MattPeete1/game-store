import sendRequest from './send-request'
const BASE_URL = 'https://project-4-diyd.onrender.com/api/wishes'

export async function createWish(wishData) {
    return sendRequest(BASE_URL, 'POST', wishData)
}

export async function getWishes(userId) {
    return sendRequest(`${BASE_URL}/${userId}`)
}

export async function updateWish(wishData, wishId) {
    return sendRequest(`${BASE_URL}/${wishId}`, 'PATCH', wishData)
}

export async function deleteWish(wishId) {
    return sendRequest(`${BASE_URL}/${wishId}`, 'DELETE')
}