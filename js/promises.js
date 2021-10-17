"Use Strict";
// console.log("Promise");

// Handle An API Promise

// Create a file named promises.js inside of your js directory and link it to an HTML file of your choice.
// Completed file setup
//     Generate a Personal Access Token for the GitHub API.
// Completed
//     We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:
//
var url = "https://api.github.com/users/John-Alejandro/events/public";
console.log(url);

fetch("https://api.github.com/users/John-Alejandro/events/public", {headers: {'Authorization': promiseAPIKey}});

// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

fetch('https://api.github.com/users/John-Alejandro/events/public')

    .then((response) => {
        // console.log(response.json());
        return response.json();
    }).then((myGitHubEventsData)=>{
        console.log(myGitHubEventsData.results);
        myGitHubEventsData.results.forEach((event)=> {
            console.log(event.id)
        })
    })

fetch('https://swapi.dev/api/films')

    .then((response)=>{
        // console.log(response.json());
        return response.json();
    }).then((starWarsFilmsData)=>{
    //starWarsFilmsData is the parsed object from the call to response.json()
    console.log(starWarsFilmsData.results);
    starWarsFilmsData.results.forEach((film)=>{console.log(film.title)})
})