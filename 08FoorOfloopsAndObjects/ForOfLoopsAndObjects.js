const car={
    engine : true,
    steering: true,
    speed: "slow"
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar:",sportsCar)

console.log('--for-in loop is unreliable--')//as after console log it also includes properties of prototypex
for(prop in sportsCar){
    console.log(prop)
}

console.log('😊',"Iterating over objec and its prototype");
console.log('--for-of-loop is reliable--')
for(prop of Object.keys(sportsCar)){
    console.log(prop + ": " + sportsCar[prop]);
}

