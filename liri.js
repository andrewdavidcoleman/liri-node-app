
// <<<<<<<<<<<<<<<Twitter>>>>>>>>>>>>>>>>>>
if (process.argv[2] === "my-tweets") {

	var keys = require("./keys.js");
	var twitter = require("twitter");

	var client = new twitter({
	  consumer_key: keys.twitterKeys.consumer_key,
	  consumer_secret: keys.twitterKeys.consumer_secret,
	  access_token_key: keys.twitterKeys.access_token_key,
	  access_token_secret: keys.twitterKeys.access_token_secret
	});

	var handle = {screen_name: 'andrewsLiri'};

	client.get('statuses/user_timeline/', handle, function(error, tweets, response) {
		if (!error) {

			for (var i = 0; i < tweets.length; i++) {

			console.log(tweets[i].text);

			}
		}
	});
}
// <<<<<<<<<<<<<<<End Twitter>>>>>>>>>>>>>>>>>>





// <<<<<<<<<<<<<<<Spotify>>>>>>>>>>>>>>>>>>
if (process.argv[2] === "spotify-this-song") {

		var keys = require("./keys.js");
		var spotify = require("node-spotify-api")

		var client = new spotify({
		  id: keys.spotifyKeys.id,
		  secret: keys.spotifyKeys.secret
		});

		// allowing for spaces in terminal input
		var nodeArgs = process.argv;
		var songTitle = "";

		for (var i = 3; i < nodeArgs.length; i++) {

			if (i > 3 && i < nodeArgs.length) {
			    songTitle = songTitle + "+" + nodeArgs[i];
			  } else {
			    songTitle += nodeArgs[i];
			  }
		}

		// the search
		var query = { type: 'track', query: songTitle };

		client.search(query, function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);
		  }
			console.log(data.tracks.items[0].artists[0].name);
			console.log(data.tracks.items[0].name);
			console.log(data.tracks.items[0].preview_url);
			console.log(data.tracks.items[0].album.name)

		});
}
// <<<<<<<<<<<<<<<End Spotify>>>>>>>>>>>>>>>>>>







// <<<<<<<<<<<<<<<OMDB>>>>>>>>>>>>>>>>>>
if (process.argv[2] === "movie-this") {

	var request = require("request");
	var nodeArgs = process.argv;

	var movieName = "";

	for (var i = 3; i < nodeArgs.length; i++) {

	  if (i > 3 && i < nodeArgs.length) {

	    movieName = movieName + "+" + nodeArgs[i];

	  }

	  else {

	    movieName += nodeArgs[i];

	  }
	}

	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

	request(queryUrl, function(error, response, body) {

	  if (!error && response.statusCode === 200) {

	    console.log("Title: " + JSON.parse(body).Title);
	    console.log("Release year: " + JSON.parse(body).Year);
	    console.log("IMDB rating: " + JSON.parse(body).imdbRating);
	    console.log("Rotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value);
	    console.log("Title: " + JSON.parse(body).Language);
	    console.log("Title: " + JSON.parse(body).Plot);
	    console.log("Title: " + JSON.parse(body).Actors);
	  }
	});


}
// <<<<<<<<<<<<<<<End OMDB>>>>>>>>>>>>>>>>>>







// <<<<<<<<<<<<<<<Request>>>>>>>>>>>>>>>>>>
if (process.argv[2] === "do-what-it-says") {

	// this part reads the data from the random.txt file
	var fs = require("fs");

	fs.readFile("random.txt", "utf8", function(error, data) {

	  if (error) {
	    return console.log(error);
	  }

	  var dataArr = data.split(",");

	  console.log("node liri.js " + dataArr[0] + " " + dataArr[1]);

	  var randomText = { type: "track", query: dataArr[1] };

	  // this part is just copied from the spotify command from above
	  var keys = require("./keys.js");
		var spotify = require("node-spotify-api")

		var client = new spotify({
		  id: keys.spotifyKeys.id,
		  secret: keys.spotifyKeys.secret
		});

		var nodeArgs = process.argv;
		var songTitle = "";

		for (var i = 3; i < nodeArgs.length; i++) {

			if (i > 3 && i < nodeArgs.length) {
			    songTitle = songTitle + "+" + nodeArgs[i];
			  } else {
			    songTitle += nodeArgs[i];
			  }
		}


		client.search(randomText, function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);
		  }
			console.log(data.tracks.items[0].artists[0].name);
			console.log(data.tracks.items[0].name);
			console.log(data.tracks.items[0].preview_url);
			console.log(data.tracks.items[0].album.name)

		});



	});

}
// <<<<<<<<<<<<<<<End Request>>>>>>>>>>>>>>>>>>
