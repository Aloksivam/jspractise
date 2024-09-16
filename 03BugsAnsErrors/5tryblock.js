const obj = undefined;
try {
  const propertyValue = obj.property; // Attempting to access a property of an undefined object
  console.log("Property Value: " + propertyValue);
  console.log("This message will be reached.");
} catch (error) {
    console.log(error.property)
    console.log(error.log)
    // console.log(error.)
  console.error("An error occurred while accessing the property:", error.message);
}
console.log("Program continues after error handling.");