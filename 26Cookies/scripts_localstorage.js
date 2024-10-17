localStorage.setItem('username', 'JohnDoe');
let username = localStorage.getItem('username');
console.log(username); // Output: JohnDoe
localStorage.removeItem('username');
localStorage.clear(); // clear all data

// You can get the number of items stored in localStorage using the length property.
console.log(localStorage.length);

// You can access the keys of the stored data using key(index), where index is the position of the key.
let firstKey = localStorage.key(0);
console.log(firstKey); // 

let user = { name: "JohnDoe", age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieving and parsing the object
let retrievedUser = JSON.parse(localStorage.getItem('user'));
console.log(retrievedUser.name); // Output: JohnDoe