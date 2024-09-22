
// console.log(multiply(4,5))
// console.log(multiply("alok",5))
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

  function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }
  function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }
console.log(divide({divisor:3,dividend:454}))
console.log(divide({dividend:454,divisor:3}))
function printName(name:string="alok"){
console.log(name);

}

// function somet(name?,roll){

// }

// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

// Example
function addition(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(addition(1,2,3,4,7,8))