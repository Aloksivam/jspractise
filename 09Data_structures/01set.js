const house1 = 'red'
const house2 = 'blue'
const house3 = 'red'

const house = new Set();
console.log(house)
house.add(house1).add(house2)
console.log(house)
// house.add(house3)--> no errors will be thrown nor any update will be done
