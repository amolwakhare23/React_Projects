import axios from 'axios';

const API_KEY = '4a3c354294248f04a279f0638b529323';
const URL = 'http://api.openweathermap.org/data/2.5/weather';


export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}
