// class Person {
//     private name: string;
//     public constructor(name: string) {
//       this.name = name;
//     }
//     public getName(): string {
//       return this.name;
//     }
//   }
//   const person = new Person("Jane");
//   console.log(person.getName());
// class Person {
//   // name is a private member variable
//   public constructor(private name: string) {}
//   public getName(): string {
//     return this.name;
//   }
// }
// const person = new Person("Jane");
// console.log(person.getName());
var Person = /** @class */ (function () {
    function Person(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jane");
console.log(person.getName());
