const connection = require('../database/connections');
const openWeather = require('../services/openWeatherMapService');
const converter = require('../util/converter');
const spotify = require('../services/spotifyService');

module.exports = {
    async getTempByCity(request, response) {
        let { city } = request.query;

        const returnTemp = await openWeather.getTempByCity(city);

        if (returnTemp.cod)
            return response.json(returnTemp);

        city = city.charAt(0).toUpperCase() + city.toLowerCase().slice(1)
        const country = returnTemp.data.sys.country;
        const weather = returnTemp.data.weather[0].main;
        const temp = converter.ConvertKelvinToCelsius(returnTemp.data.main.temp);
        const humidity = returnTemp.data.main.humidity;
        const cloudiness_percent = returnTemp.data.clouds.all;

        let categoryMusic = '';
        if(temp > 25)
            categoryMusic = 'pop';
        if(temp >= 10 && temp <=25)
            categoryMusic = 'rock';
        if(temp < 10)
            categoryMusic = 'classical';

        await connection('log').insert({
            city,
            country,
            temp,
            weather,
            humidity,
            cloudiness_percent,
            categoryMusic
        });

        const playlists = await spotify.playlistCategory(categoryMusic);
        const tracks = await spotify.tracksByPlaylist(playlists.playlists.items[0].id);

        trackies = [];

        for(var i in tracks.items)
            trackies.push(tracks.items[i].track.name);

        return response.json({trackies});
    }
}