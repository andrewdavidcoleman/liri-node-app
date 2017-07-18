
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
	  	// still need to find specific information!
	    console.log(tweets);

	  }
	});
}


// <<<<<<<<<<<<<<<Spotify>>>>>>>>>>>>>>>>>>
if (process.argv[2] === "spotify-this-song") {
	// global variables
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




// <<<<<<<<<<<<<<<OMDB>>>>>>>>>>>>>>>>>>
if (process.argv[2] === "movie-this") {


	
}


// <<<<<<<<<<<<<<<Request>>>>>>>>>>>>>>>>>>
if (process.argv[2] === "do-what-it-says") {


	
}