
require("dotenv").config();

var instruct = process.argv;
console.log(instruct)
var whatToDo = instruct[2];
var thing = instruct.slice(3);
var dataKeys = require("./keys.js");

var fs = require('fs');
var twitter = require('twitter');
var spotify = require('spotify')
var request = require('request');

if (whatToDo === "my-tweets") {
    getTweets();
}

else if (whatToDo === "spotify-this-song") {
    spotifyThis(thing)
}

else if (whatToDo === "movie-this") {
    movieThis(thing)
}

else if (whatToDo === "do-what-it-says") {
    doWhatItSays();
}

function getTweets() {
    var params = { screen_name: 'mikebinder', count: 20 };
    var client = new twitter({
        consumer_key: 'N9FfvU8eNhtpvGLCzseiJSWMB',
        consumer_secret: 'CB6l6Y6XsspYaboWHbDokpdYMs0pyiR9Uex4WaV3GIeKUFYS3H',
        access_token_key: '27805350-kFwDMh6oIxK9yzaZhnms3g7wz6pZdAJIngJkwSly2',
        access_token_secret: 'oO8Pxpw2xelL3xheJs8FWJRjoZsfhywAWfF1Q6DQWuaKh'
    });

    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            var twits = [];
            for (var i = 0; i < tweets.length; i++) {
                twits.push({
                    

                    'created at: ': tweets[i].created_at,
                    'Tweets: ': tweets[i].text,

                });
            }
            console.log(twits);
        } else {
            console.log("Failure on twitter ");
        };
    });
};

function spotifyThis(thing) {
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify({
        id: '6d79fec15c9e494db058f16260c252c3',
        secret: '9d2ea12317224932a0484f085347414f'
    });
    if (thing === undefined) {
        thing === "The Sign";
    }
    spotify.search({
        type: 'track',
        query: thing + '&limit=5&'
    }, function (error, data) {
        if (error) {
            console.log('Error occurred: ' + error);
            return;
        }
        console.log('--------------------');
        console.log('Artist(s): ' + data.tracks.items[0].artists[0].name);
        console.log('Song Title: ' + data.tracks.items[0].name);
        console.log('Preview Link: ' + data.tracks.items[0].preview_url);
        console.log('Album: ' + data.tracks.items[0].album.name);
        console.log('--------------------');
    });

};

function movieThis(thing) {

    var omdbApi = require('omdb-client');

    if (thing === null) {
        thing = 'Mr Nobody';
      }
    var queryUrl = "http://www.omdbapi.com/?t=" + thing + "&y=&plot=short&apikey=trilogy";


console.log("Here are the movie details!");

request(queryUrl, function(error, response, body) {


  if (!error && response.statusCode === 200) {


    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year)
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating)
    console.log("Rotten Tomato Score: " + JSON.parse(body).tomatoRating)
    console.log("Country: " + JSON.parse(body).Year)
    console.log("Language: " + JSON.parse(body).Language)
    console.log("Plot: " + JSON.parse(body).Plot)
    console.log("Actors: " + JSON.parse(body).Actors)
  }
})


}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        console.log(data);    
})
}