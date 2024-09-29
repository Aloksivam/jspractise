interface Housemodel{
    sqft:number;
    yardsize?:{
        sqft:number;
    }
}
function printYardSize(house:Housemodel){
    const yardsiz = house.yardsize?.sqft
    if(yardsiz==undefined){
        console.log("No Yard")
    }
    else{
        console.log(`yard size is ${yardsiz}`)
    }
}

let home:Housemodel = {
    sqft:500,
    yardsize:{sqft:456}
}
printYardSize(home)