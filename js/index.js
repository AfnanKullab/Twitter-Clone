let userName = document.querySelector("#username");
let _tweet = document.querySelector("#newtweet");
const submitBTn = document.querySelector('#tweetButton');

let dataTweet = []; // def arr to push tweet inside it.
class Tweet {
    constructor(username, tweet,like,retweet) {
        (this.username = username),
        (this.tweet = tweet),
        (this.like = like),
        (this.retweet =retweet)
    }
}


function addNewTweet() {   // to add the tweet onject to an array
    let username = userName.value
    let tweet = _tweet.value
    let like = "far";
    let retweet = "fas";
    let newTweet = new Tweet(username, tweet, like, retweet);
    dataTweet.unshift(newTweet); // to add the tweet on the top of newsfeed.

    console.log(dataTweet)
  
    createNewTweet();
  }

function createNewTweet(){
    for (let i = 0; i < dataTweet.length; i++){
        let newsfeed = document.querySelector("#newsfeed"); // the container to all tweets
        let newfeed = document.createElement("div");
        newfeed.classList.add("newTweet-content");
    
        const container = document.createElement("div");
        container.classList.add("container");
        newfeed.appendChild(container);
        newsfeed.appendChild(newfeed);
    
        let newUserName = document.createElement("h3");
        newUserName.textContent = `${dataTweet[i]["username"]}`;
        container.appendChild(newUserName);
    
       let contentNewTweet = document.createElement("p");
        contentNewTweet.textContent = `${dataTweet[i]["tweet"]}`;
        container.appendChild(contentNewTweet);
    
       const tweetBtns = document.createElement("div");
        tweetBtns.classList.add("icon-tweet");
        const likeIcon = document.createElement("i");
        likeIcon.classList.add(`${dataTweet[i]["like"]}`);
        likeIcon.classList.add("fa-heart");
        tweetBtns.appendChild(likeIcon);
        const retweetIcon = document.createElement("i");
        retweetIcon.classList.add(`${dataTweet[i]["retweet"]}`);
        retweetIcon.classList.add("fa-retweet");
        tweetBtns.appendChild(retweetIcon);
        container.appendChild(tweetBtns); 
    }
    
}

submitBTn.addEventListener("click",(e)=>{
    e.preventDefault();
    addNewTweet()
});

// likeIcon.addEventListener("click",()=>{
//     newfeed.classList.remove("newTweet-content");
//     newsfeed.classList.add("newTweetContent")

// })