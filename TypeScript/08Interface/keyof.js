// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
}
var persons = {
    name: "Max",
    age: 27
};
printPersonProperty(persons, "name");
