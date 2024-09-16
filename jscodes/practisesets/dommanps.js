// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
document.getElementsByClassName("navi")[0].firstElementChild.firstElementChild.style.color = "blue";
document.getElementsByClassName("navi")[0].firstElementChild.lastElementChild.style.color = "green";
document.getElementsByClassName("navi")[0].firstElementChild.firstElementChild.style.color = "green";
// document.getElementsByClassName("navi")[0].firstElementChild.firstElementChild.innerHTML = "first";
// document.getElementsByTagName(body)[0].firstElementChild.style.color = "blue";

// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "white" 

// to change the bck color of each li to yellow

// document.getElementsByTagName("ul")[0].style.background = "red"


Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "yellow"
});