function greeting(){
    console.log("good morning from js linked using script tag")
}
let a  = document.getElementsByClassName("container")[0];
a.onclick=()=>{
    let b = document.getElementsByClassName("container")[0];
    b.innerHTML = '<h2 class="container">external js k through</h2>'
}