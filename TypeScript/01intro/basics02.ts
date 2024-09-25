let a = "34";
 a = "alok"
 console.log(a)
 interface Person {
    name: string;
    age: number;
    qualification: string[];
  }
  
  const array: Person[] = [
    { name: "Roy", age: 25, qualification: ["B.Sc.", "MS"] },
    { name: "Shane", age: 36, qualification: ["BCA", "M.Tech", "PHd"] },
    { name: "George", age: 45, qualification: ["B.Com.", "MBA"] },
    { name: "William", age: 20, qualification: ["B.Sc."] },
    { name: "Smith", age: 21, qualification: ["MBA"] },
    { name: "Json", age: 25, qualification: ["M.Tech"] },
    { name: "Dawyne", age: 56, qualification: ["B.Com."] }
  ];
  
  function findPeopleWithSameQualifications(people: Person[]) {
    const result: { [qualification: string]: string[] } = {};
  
    people.forEach(person => {
      person.qualification.forEach(qual => {
        if (!result[qual]) {
          result[qual] = [];
        }
        result[qual].push(person.name);
      });
    });
  
    // Filter out qualifications with only one person
    const filteredResult: { [qualification: string]: string[] } = {};
    for (const qual in result) {
      if (result[qual].length > 1) {
        filteredResult[qual] = result[qual];
      }
    }
  
    return filteredResult;
  }
  
  const matchedPeople = findPeopleWithSameQualifications(array);
  console.log(matchedPeople);
  

