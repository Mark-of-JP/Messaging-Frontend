require('dotenv').config()

export const apiUrl = process.env.REACT_APP_API_URL !== undefined ? process.env.REACT_APP_API_URL : 'https://everglade-messaging.web.app/'