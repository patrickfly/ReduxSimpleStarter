import axios from 'axios';

const API_KEY = '196ba7706aac4ac86c8f3aafe929444e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}






// export function selectBook(book){
//     //console.log('A book has been selected:', book.title);

//     return{
//         type: 'BOOK_SELECTED',
//         payload: book
//     }
// }