
// console.log("alok")
// 2.	Given an array array{}, write a function to filter all the age>=25

// without using any predefined method of array
// using predefined method of array.

// array = [{name:”Roy”, age: 25}, {name:”Shane”, age: 36}, {name:”Goerge”, age: 45}, {name:”William”, age: 18},{name:”Smith”, age: 21}, {name:”Json”, age: 25 }]

//   3.	Given an array array{}, write a function to find all the age=25

// without using any predefined method of array
// using predefined method of array.

// array = [{name:”Roy”, age: 25}, {name:”Shane”, age: 36}, {name:”Goerge”, age: 45}, {name:”William”, age: 18},{name:”Smith”, age: 21}, {name:”Json”, age: 25 }]
	
// const array: { name: string; age: number }[] = [
//     { name: "Roy", age: 25 },
//     { name: "Shane", age: 36 },
//     { name: "Goerge", age: 45 },
//     { name: "William", age: 18 },
//     { name: "Smith", age: 21 },
//     { name: "Json", age: 25 }
//     // { name2: "Json", age: 25 }
//   ];
// for(let i of array){
//     if(i.age>=25){
//         console.log(i.name)
//     }
// }
  
// for(let i of array){
//     if(i.age==25){
//         console.log(i.name)
//     }
// }
  
// array.filter((e)=>{if(e.age>=25)
//     console.log(e.name)
// })

let list = [{
	"id": 1,
	"name": "Max Adams",
	"born": "21 Oct 2001",
	"cars": [ {"maker": "Mercedes", "model": "GLS"	}, {"maker": "Audi", "model": "Q8" } ],
	"favourite": { "colour": "Blue", "movie": "Toy Story" }
},
{
	"id": 2,
	"name": "Steven Miller",
	"born": "28 Jul 2004",
	"cars": [ {"maker": "Tesla", "model": "Model S"} ],
	"favourite": { "colour": "Red", "movie": "Mulan" }
},
{
	"id": 3,
	"name": "Daniel James",
	"born": "18 Dec 2005",
	"cars": [ {"maker": "Bugatti", "model": "Chiron"} ],
	"favourite": { "colour": "Yellow", "movie": "Frozen", "toy": "Teddy" }
},
{
	"id": 4,
	"name": "Tom",
	"born": "26 Dec 2003",
	"cars": [ {"maker": "Bugatti", "model": "Chiron"},{"maker": "Audi", "model": "Q8" },{"maker": "Ford", "model": "Mustang" } ],
	"favourite": { "colour": "Yellow", "movie": "Frozen", "toy": "Teddy" }
}]
let max_car=0;
let c_id=0;
for(let i of list){
    if(i.cars.length>max_car){
        c_id=i.id;
        max_car = i.cars.length
    }
}
console.log(list[c_id-1].name)
let car=list[c_id-1]
// console.log(car)
for(let i of car.cars){
    // console.log(i.model)
}

// let hashMap = new Map();
let hashMap:Map<string,string> = new Map();
for(let i of list){
    for(let j of i.cars){
        if(!hashMap.has(j.maker)){
            hashMap.set(j.maker,j.model);
        }
    }
}
async function printCar() {
    for (const [key, value] of hashMap) {
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log(`${key}  ${value}`);
          resolve(null);
        }, 1000);
      });
    }
  }
  
  // await printCar();
console.log("Thank you");
// console.log(hashMap)