interface namee{
    fname:string
    lname:string
}

let var1:namee={fname:"alok",lname:"sinha"} 
let var2:Partial<namee>={lname:"sinha"} 
console.log(var2.fname)

//Required changes all properties in an object to required

interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
  
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };