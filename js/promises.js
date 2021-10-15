"Use Strict";
// console.log("Promise");

// Handle An API Promise

// Create a file named promises.js inside of your js directory and link it to an HTML file of your choice.
// Completed file setup
//     Generate a Personal Access Token for the GitHub API.
// Completed
//     We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:
//
var url = "https://api.github.com/users/John-Alejandro/events";
// console.log(url);

fetch(url, {headers: {'Authorization': promiseAPIKey}});

// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

var myGitHubApi = fetch("https://api.github.com/users/John-Alejandro/events")

    .then((response) => {
        return response.json();
    }).then((myGitHubAPI)=>{
        console.log(myGitHubApi.results);
        myGitHubApi.results.forEach((event)=> {
            console.log(event.created_at)
        })
    })
