let canDrive = true;
let runAgain = true;
canDrive = age =>{return age>18} 
while(runAgain){
    let age = prompt("enter ur age")
    age = Number.parseInt(age)
    if(age<0){
        console.error("please enter a valid age")
        alert("enter a valid age")
        break
    }
    if(canDrive(age)){
        alert("you can drive")
    }
    else{
        alert("you can't drive")
    }
    runAgain = confirm("do you want to play again")
}