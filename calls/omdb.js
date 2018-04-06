const request = require('request');
const key = require("../config/keys").omdb
const basePath="http://www.omdbapi.com/?";

const getParams=(query)=>{
    return '&apikey='+key+"&t="+query+"&r=json"
}

const getMovie=(query)=>{
    if(!query) query="Mr. Nobody"
  const path=basePath + getParams(query);
return request(path, function (error, response, body) {
    if(error) throw error
    const movie=JSON.parse(body);
    const ratings=movie.Ratings
    .filter(val => val.Source === "Rotten Tomatoes")
    .map(rating => rating.Value)

    console.log(movie.Title);
    console.log(movie.Year);
    console.log(movie.imdbRating);
    console.log(ratings);
    console.log(movie.Country)
    console.log(movie.Language)
    console.log(movie.Plot)
    console.log("Actors:   ",movie.Actors)
    console.log("IMDB Link:", "http://www.imdb.com/title/"+movie.imdbID+"/")
 
});
}

module.exports = getMovie 