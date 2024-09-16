let first = document.getElementById("first");
let cls = first.getAttribute("class")
console.log(cls)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
console.log(first.hasAttribute("alok"))
// first.setAttribute("hidden","true")
// first.removeAttribute("alok") //this will remove attribute named alok
console.log(first.attributes) //NamedNodeMap(3) [ id="first", class="hey", alok="author" ]
first.setAttribute("data-game","templerun")
first.setAttribute("data-player","alok")
console.log(first.dataset) //DOMStringMap { game → "templerun", player → "alok" }
console.log(first.dataset.game)
console.log(first.dataset.player)

