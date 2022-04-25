import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json())
app.use(cors())

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    users.push(req.body);
    console.log(req.body)
    res.send("ok");
})

app.post("/tweets", (req, res) => {
    const tweet = req.body;
    
    tweets.push(tweet);  
    
    console.log(tweets, tweet)
    res.send("ok");
});

app.get("/tweets", (req, res) => {
    let lastTweets = []; 
    if(tweets.length > 10){
        for(let i = tweets.length -1; i > tweets.length -10; i--){
            const tweetOwner = users.find((user) => user.username == tweets[tweets.length-i].username);
            lastTweets.push(
                {
                    ...tweets[tweets.length-i], 
                    avatar: tweetOwner.avatar
                }
            );
            lastTweets.shift();
        }
    }else{
       tweets.map((tweet) => {
            const tweetOwner = users.find((user) => user.username == tweet.username);
            lastTweets.push(
                {
                    ...tweet, 
                    avatar: tweetOwner.avatar
                }
            );
        })

    }
    let reversedLastTweets = [...lastTweets].reverse();
    res.send(reversedLastTweets);
})

app.listen(5000, () => {console.log('Servidor iniciado em http://localhost:5000')});

