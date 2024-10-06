class Human{
    constructor(name,gender,age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    abouthim(){
        return `${this.name} is ${this.gender}`
    }
}

class Student extends Human{
    constructor(name,stream){
        super(name);

    //     ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    // at new Student (file:///d:/html/Javascript/24Classes/01Class_intro.js:16:9)
    // at file:///d:/html/Javascript/24Classes/01Class_intro.js:19:12
    // at ModuleJob.run (node:internal/modules/esm/module_job
        this.stream = stream
    }
}
let alok = new Student("ashlil","BSC")
console.log(alok.name)
console.log(alok instanceof Student)