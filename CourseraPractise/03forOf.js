function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for (var dish of dairy) {
        console.log(dish);
    }
    
}
logDairy();


const animal = {

    canJump: true
    
    };
    
    const bird = Object.create(animal);
    
    bird.canFly = true;
    
    bird.hasFeathers = true;
    function birdCan(){
        for(prop of Object.keys(bird)){
            console.log(prop + ": "+ bird[prop]);
        }
    }
    birdCan();
    function animalCan(){
        for(prop in bird){
            console.log(prop + ": "+ bird[prop]);
        }
    }
    animalCan();