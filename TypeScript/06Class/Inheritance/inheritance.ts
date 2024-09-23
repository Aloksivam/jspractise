// interface Shape {
//     getArea: () => number;
//   }
  
//   class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number) {}
  
//     public getArea(): number {
//       return this.width * this.height;
//     }
//     public intro():void{
//         console.log("i am present inside rectange")
//     }
//   }

//   class Square extends Rectangle{
//     public constructor(protected readonly side:number){
//         super(side,side);
//     }
//     //override keyword is optional
//     public override intro():void{
//         console.log("i am present inside square")
//     }
//   }
// let rect1 = new Rectangle(12,23)
// console.log(rect1.getArea())
// console.log(new Square(12).intro())
// console.log(new Square(12).getArea())
// // A class can implement multiple interfaces sby listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {

abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }
  
  class Rectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
  }