interface Person {
    name: string;
    age: number;
  }
  const person: Readonly<Person> = {
    name: "Dylan",
    age: 35,
  };
//   person.name = 'Israel';