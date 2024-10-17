console.log(document.cookie)
document.cookie = "name3=alok" // will add one more this cookie to list of  existing cookies 
//will not add the same cookie twice 
// let date = new Date();
// date.setTime(date.getTime() + (7*24*60*60*1000)); // 7 days in milliseconds
// document.cookie = "name=alok; expires=" + date.toUTCString() + "; path=/";
// console.log(document.cookie)

// let key = prompt("enter your key")
// let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}` // can accept keys which have ";"  in between them

//decodeURIComponent("full%3Bname") can be used to decode the string which contains special characters in them
// console.log(cookie)alo