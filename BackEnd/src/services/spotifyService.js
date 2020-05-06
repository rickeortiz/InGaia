const Spotify = require('node-spotify-api');

const endPoint = 'https://api.spotify.com'
const spotify = new Spotify({
    id: 'f4fa37b7419a4d38a63ad2be41915d69',
    secret: 'cfc61913e18e49d4acb5df9de53af367'
  });

module.exports = {
    async playlistCategory(category) {
        const url = `/v1/browse/categories/${category}/playlists`;

        return await spotify.request(endPoint + url);
    },

    async tracksByPlaylist(playlistId) {
        const url = `/v1/playlists/${playlistId}/tracks`
        
        return await spotify.request(endPoint + url);
    }
}