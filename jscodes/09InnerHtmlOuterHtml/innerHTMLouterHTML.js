// console.log(document.getElementsByTagName('span')[0]) 
// VM16:1 <span>​hi, i am present in span​</span>​
// undefined
// console.log(document.body.firstChild.nodeName) 
// VM208:1 #text
// undefined
// console.log(document.body.firstElementChildChild.nodeName) 
// VM216:1 Uncaught TypeError: Cannot read properties of undefined (reading 'nodeName')
//     at <anonymous>:1:50
// (anonymous) @ VM216:1
// console.log(document.body.firstElementChild.nodeName) 
// VM225:1 SPAN
// undefined
// console.log(document.body.firstChild.TagName) 
// VM243:1 undefined
// undefined
// console.log(document.body.firstElementChild.TagName) 
// VM255:1 undefined
// undefined




﻿
// first.innerHTML
// 'hi, i am present in span'
// first.outerHTML
// '<span id="first">hi, i am present in span</span>'
// document.body.firstChild.data
// '\n    Hello World\n    '
// document.body.firstChild.nodeValue
// '\n    Hello World\n    '
// first.data
// undefined
// first.innerHTML = '<I>HI I AM SETTED <i>'
// '<I>HI I AM SETTED <i>'
// first.outerHTML = '<div><b>i have been inserted through outerHTML</b></div>'
// '<div><b>i have been inserted through outerHTML</b></div



// 0.hidden = false first
// false
// $0.hidden = true
// true
// $1.hidden = true
// true