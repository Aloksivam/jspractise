class car{
    constructor(name,color,speed){
        this.color=color
        this.speed=speed
        this.name = name
    }
    turboOn(){
        console.log("turbo is on")
    }
    getDetails(){
        console.log(`this is ${this.name}`)
    }
    getDetails(){
        return (`The name of the bike is ${this.name}.`)
    }
}
// car jeep = new car('red',89);
// const car1 = new car('red',89)
// let car1 = new car('red',89)
var car1 = new car('jeep','red',89)
var car3 = Object.create(car)
car1.turboOn()
// car1.getDetails()
car3.turboOn()