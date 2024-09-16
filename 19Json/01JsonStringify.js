const personJSON = {
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "country": "USA"
    },
    "tags": ["JavaScript", "Node.js", "Web Development"],
    "isStudent": false,
    "workExperience": null
  };
  // Convert the JSON object to a string
  console.log(typeof personJSON)
  const jsonString = JSON.stringify(personJSON);
  console.log(typeof jsonString);