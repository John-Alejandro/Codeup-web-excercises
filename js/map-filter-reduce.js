const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
// Completed
//   2.  Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let usersWithMutipleLangs = users.filter(function (language) {
    return language.languages.length > 2;
})

console.log(usersWithMutipleLangs);

//  3.  Use .map to create an array of strings where each element is a user's email address

let userEmails = users.map(function (useremail) {
    return useremail.email;
})

console.log(userEmails);

// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalUserExperience = users.reduce(function (result,user) {
    return result + user.yearsOfExperience/users.length;
}, 0)

console.log(totalUserExperience);
//  5.   Use .reduce to get the longest email from the list of users.

let longestUserEmail = users.reduce(function (longestEmail, user) {
    // if (longestEmail.length > user.email.length) {
//     return longestEmail;
// } else
// {
//     return user.email;
// }
    return longestEmail.length > user.email.length ? longestEmail: user.email
}, "")
console.log(longestUserEmail);

// let longestEmail = Math.max(longestUserEmail);
// console.log(longestEmail);
//  6.   Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let singeleStringUsers = users.reduce(function (nString, user, index) {
//     if (index != users.length -1){
//         return nString + (users.name + ", ")
//     }
//     return nString + (user.name + ",")
// }, "Your instructors are :")

console.log(singeleStringUsers);
var singeleStringUsers = users.map(function (user) {
    return user.name
}).join(",")