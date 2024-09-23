const nameAgeMap: { [index: string]: number} = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.alok = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
// Index signatures like this one can also be expressed with utility types like Record<string, number>