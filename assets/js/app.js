//variables 
const tweetList= document.getElementById('tweet-list');


//Event Listeners
eventListeners();

function eventListeners(){
    //form submission
    document.querySelector('#form').addEventListener('submit',newTweet);
    
    //remove tweet from the list
    tweetList.addEventListener('click',removeTweet); 
           
    //Document
    document.addEventListener('DOMContentLoaded',localStorageOnLoad);
}

//functions
function newTweet(e){
    e.preventDefault();
    //console.log('form sumitted');
   
    //read the text area value

const tweet = document.getElementById('tweet').value;
//console.log(tweet);
//create remove button
    const removebtn = document.createElement('a');
    removebtn.classList= 'remove-tweet';
    removebtn.textContent='X';


//create an <li> element
const li =document.createElement('li');
li.textContent=tweet;

//add remove button to each tweet 
li.appendChild(removebtn);

//add the list 
tweetList.appendChild(li);  
 
//add tweets to local storage
       addTweetLocalStorage(tweet);
       alert('tweet added');
        this.reset();
}
//removes the tweets from the DOM
function removeTweet(e){
 if(e.target.classList.contains('remove-tweet')){
     e.target.parentElement.remove(); 
 }
 else{
     console.log('no');
 }

// remove from storage 
removeTweetFromLocalStorage( e.target.parentElement.textContent );





} 
//add tweets into local storage
function addTweetLocalStorage(tweet){
let tweets=getTweetsFromStorage();


//add tweet to an array
    tweets.push(tweet); 
//convert tweet array into string  
 localStorage.setItem('tweets',JSON.stringify(tweets) );


}
function getTweetsFromStorage(){
    let tweets;
    const tweetsLS= localStorage.getItem('tweets');
    //get the values, if null is returned then we create an empty array 
    if(tweetsLS ===null){
        tweets= [];  
    }else {
        tweets= JSON.parse(tweetsLS);

    }
    return tweets;
}
//print local storage tweets on load 
function localStorageOnLoad(){
    let tweets = getTweetsFromStorage();
    
    //loop throughout the storage and print the values
    tweets.forEach(function(tweet) {
   //create remove button
   const removebtn = document.createElement('a');
   removebtn.classList= 'remove-tweet';
   removebtn.textContent='X';


//create an <li> element
const li =document.createElement('li');
li.textContent=tweet;

//add remove button to each tweet 
li.appendChild(removebtn);

//add the list 
tweetList.appendChild(li);  

        });

    
}
function removeTweetFromLocalStorage(tweet){
    //get tweets from storage
    let tweets= getTweetsFromStorage();
     
    //remove tweets from the tweet
    const tweetDelete= tweet.substring(0,tweet.length-1);
    
    //loop through the tweets and remove the tweets thats equal
    tweets.forEach(function(tweetLS,index){
            if(tweetDelete===tweetLS){
                tweets.splice(index,1);
            }
    });
localStorage.setItem('tweets',JSON.stringify(tweets) );
}













