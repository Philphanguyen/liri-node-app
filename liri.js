require("dotenv").config();
//var spotify = new Spotify(keys.spotify);
/* had major issues with twitter one, moving to movie for now for understanding of API and NodeJS.
var keys = require("./keys.js");
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

var params = {screen_name: 'peregrim3', count: 10};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) {
      console.log(error);
      console.log(keys.twitter);
  } else {
    console.log("No error: " + response);
  }
});
*/

if (process.argv[2] === "movie-this") {

    var url1 = "http://www.omdbapi.com/?t=";
    var url2 = "&y=&plot=long&apikey=trilogy";
    var query = process.argv.slice(3).join("+");
    if (process.argv[3] == null) {
        var queryURL = url1 + "mr+nobody"+url2;
        console.log("If you haven't watched " + '"Mr. Nobody"' + " then you should: http://www.imdb.com/title/tt0485947/" +
        "\nIt's on Netflix!");
    } else {
        var queryURL = url1 + query + url2;
    }


    var request = require("request");

    request(queryURL, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("\nMovie Title: " + JSON.parse(body).Title);
            console.log("\nRelease Date: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[2].Value);
            console.log("\nNation of Origin: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("\nPlot: " + JSON.parse(body).Plot);
            console.log("\nCast: " + JSON.parse(body).Actors);
            //console.log(response);
        }
    });
} else {
    console.log('\nYou should try "$node liri.js movie-this"');
};