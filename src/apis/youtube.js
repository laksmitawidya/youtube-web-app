import axios from 'axios';
const KEY = 'AIzaSyAdTwm_2zYA1i4ZNoZlNGJ1Ityn0oKp9wo'
//const baseURL = 'https://www.googleapis.com/youtube/v3'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
    }
});

