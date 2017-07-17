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
    console.log(tweets);
    // res.status(200).render('index', { title: 'Express', tweets: tweets });
  }
  // console.log(JSON.parse(response));
});
