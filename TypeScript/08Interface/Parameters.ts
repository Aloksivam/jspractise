type PointPrinter = (p: { x: number; y: number; },n:number) => void;
const point2: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};
console.log(point2)