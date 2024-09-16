let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML+ '<h1>Hello world</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello world</h1>';
// a.appendChild(div)
// a.append(div)
// a.prepend(div)
//a.before(div)//node before will insert just before the div element
//a.after(div)// node after will insert just after div
// a.replaceWith(div)