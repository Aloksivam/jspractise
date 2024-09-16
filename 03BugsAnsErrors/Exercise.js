function addTwoNums(a, b) {
    console.log(a+b)
    try {
        if (typeof(a) != 'number') { //typeof() returns string
            throw new ReferenceError("the first argument is not a number")
            // console.log();}
        }
        else if (typeof (b) != 'number') {
            throw new ReferenceError("the second argument is not a number")
        }
        else {
            console.log(a + b);
        }
    }
    catch (err) {
        console.log("Error!", err);
    }
}
addTwoNums('alok',7)
// console.log(typeof (9))