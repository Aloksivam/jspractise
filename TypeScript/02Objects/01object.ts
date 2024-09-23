const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  console.log(car)

  //infering type by itself

  const carr = {
    type: "Toyota",
  };
  carr.type = "Ford"; // no error
//   carr.type = 2; // Error: Type 'number' is not assignable to type 'string'.

// const car2: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type: "Toyota"
// };
// car2.mileage = 2000;
const car2: { type: string, mileage?: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota"
};
car2.mileage = 2000;