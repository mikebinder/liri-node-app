# LIRI Bot

### Overview

LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that runs locally and takes in parameters in specific locations using process.argv and returns data.

### Commands

**my-tweets** will return a list of the 20 most recent tweets. 

**spotify-this-song** will return the following data for whatever song follows the command;
1.Artist
2.Song Title
3.Preview (which can be quickly accessed by command clicking the link)
4.Album

**movie-this** will return the following data for whatever movie follows the command;
1.Title
2.Release Year
3.IMDB Rating
4.Rotten Tomatoes Score
5.Country of origin
6.Language
7.Plot Synopsis
8. Actors

**do-what-it-says** will use fs readFile to pass the contents of a txt file into the spotify function. 

### Tech Used
Node.js
Twitter NPM Package - https://www.npmjs.com/package/twitter
Spotify NPM Package - https://www.npmjs.com/package/spotify
Request NPM Package - https://www.npmjs.com/package/request

### Built With
VisualStudio Code



