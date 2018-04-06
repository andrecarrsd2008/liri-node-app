const Twitter = require('twitter');
const key=require("../config/keys").twitter; 
const client = new Twitter(key);
const params={
  count: 20
}

const getTweets = () => {
  client.get('statuses/user_timeline', params, function(err, tweets, res) {
    if (err) throw err
    tweets = tweets.forEach(tweet=>{
      console.log(tweet.created_at);
      console.log(tweet.text)
    })
  });
}

module.exports = getTweets