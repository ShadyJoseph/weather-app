
export const geoApiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
    }
};
