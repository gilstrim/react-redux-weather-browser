import axios from 'axios';

const API_KEY = '1361a734d49205a5dbdb0a0b704a358e';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); // redux-promise will ensure that the promise result is sent to the reducer

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}