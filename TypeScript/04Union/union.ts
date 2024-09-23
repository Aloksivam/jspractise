let nr:string|number|boolean//(by using pipe we can provide any type)
nr = 45;
nr = "alok"


function printStatusCode(code: string | number) {
    console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
    // Property 'toUpperCase' does not exist on type 'number'
  }
