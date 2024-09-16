var bird = {
    hasWings: true,
    canFly: true,
    hasFeather: true
}

var eagle1 = Object.create(bird);
console.log(eagle1.canFly)
//here bird is prototype

// below method is not applicable for declaring other object with given object 
// var eagle2 = new bird();
// console.log(eagle2.canFly)

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log(penguin1)