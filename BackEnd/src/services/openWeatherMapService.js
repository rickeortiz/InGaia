const endPoint = 'http://api.openweathermap.org';
const token = 'f69798fc59cbae6b965d0317aa444200';

const axios = require('axios');

module.exports = {
    async getTempByCity(cityName) {
        const url = `/data/2.5/weather?q=${cityName}&appid=${token}`;
        let temp = '';

        try {
            temp = await axios.get(endPoint + url);
        }
        catch (err) {
            temp = err.response.data;
        }

        return temp;
    }
}