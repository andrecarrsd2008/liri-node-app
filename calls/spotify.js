const Spotify = require('node-spotify-api');
const key = require("../config/keys").spotify;
const spotify = new Spotify(key);
const getParams = (query) => {
    return {
        type: 'track',
        query: query
    }
}

const getSong = (query) => {
    const params = getParams(query)
    spotify.search(params, (err, data) => {
        if (err) throw err
        const tracks = data.tracks.items
        tracks.forEach(track => {
            console.log(query);
            console.log(track.artists);
            console.log(track.album.name);
            console.log(track.external_urls.spotify);
        })
    });
}


module.exports = getSong