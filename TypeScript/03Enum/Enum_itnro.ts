enum CardinalDirections {
    North='a',
    East,
    South,
    West
  }
  let currentDirection = CardinalDirections.West;
  // logs 0
  console.log(currentDirection);
  // throws error as 'North' is not a valid enum
//   currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
  