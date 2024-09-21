"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("alok")
// 2.	Given an array array{}, write a function to filter all the age>=25
// without using any predefined method of array
// using predefined method of array.
// array = [{name:”Roy”, age: 25}, {name:”Shane”, age: 36}, {name:”Goerge”, age: 45}, {name:”William”, age: 18},{name:”Smith”, age: 21}, {name:”Json”, age: 25 }]
//   3.	Given an array array{}, write a function to find all the age=25
// without using any predefined method of array
// using predefined method of array.
// array = [{name:”Roy”, age: 25}, {name:”Shane”, age: 36}, {name:”Goerge”, age: 45}, {name:”William”, age: 18},{name:”Smith”, age: 21}, {name:”Json”, age: 25 }]
// const array: { name: string; age: number }[] = [
//     { name: "Roy", age: 25 },
//     { name: "Shane", age: 36 },
//     { name: "Goerge", age: 45 },
//     { name: "William", age: 18 },
//     { name: "Smith", age: 21 },
//     { name: "Json", age: 25 }
//     // { name2: "Json", age: 25 }
//   ];
// for(let i of array){
//     if(i.age>=25){
//         console.log(i.name)
//     }
// }
// for(let i of array){
//     if(i.age==25){
//         console.log(i.name)
//     }
// }
// array.filter((e)=>{if(e.age>=25)
//     console.log(e.name)
// })
var list = [{
        "id": 1,
        "name": "Max Adams",
        "born": "21 Oct 2001",
        "cars": [{ "maker": "Mercedes", "model": "GLS" }, { "maker": "Audi", "model": "Q8" }],
        "favourite": { "colour": "Blue", "movie": "Toy Story" }
    },
    {
        "id": 2,
        "name": "Steven Miller",
        "born": "28 Jul 2004",
        "cars": [{ "maker": "Tesla", "model": "Model S" }],
        "favourite": { "colour": "Red", "movie": "Mulan" }
    },
    {
        "id": 3,
        "name": "Daniel James",
        "born": "18 Dec 2005",
        "cars": [{ "maker": "Bugatti", "model": "Chiron" }],
        "favourite": { "colour": "Yellow", "movie": "Frozen", "toy": "Teddy" }
    },
    {
        "id": 4,
        "name": "Tom",
        "born": "26 Dec 2003",
        "cars": [{ "maker": "Bugatti", "model": "Chiron" }, { "maker": "Audi", "model": "Q8" }, { "maker": "Ford", "model": "Mustang" }],
        "favourite": { "colour": "Yellow", "movie": "Frozen", "toy": "Teddy" }
    }];
var max_car = 0;
var c_id = 0;
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    if (i.cars.length > max_car) {
        c_id = i.id;
        max_car = i.cars.length;
    }
}
console.log(list[c_id - 1].name);
var car = list[c_id - 1];
// console.log(car)
for (var _a = 0, _b = car.cars; _a < _b.length; _a++) {
    var i = _b[_a];
    // console.log(i.model)
}
// let hashMap = new Map();
var hashMap = new Map();
for (var _c = 0, list_2 = list; _c < list_2.length; _c++) {
    var i = list_2[_c];
    for (var _d = 0, _e = i.cars; _d < _e.length; _d++) {
        var j = _e[_d];
        if (!hashMap.has(j.maker)) {
            hashMap.set(j.maker, j.model);
        }
    }
}
function printCar() {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1, _i, hashMap_1, _a, key, value;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _loop_1 = function (key, value) {
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, new Promise(function (resolve) {
                                        setTimeout(function () {
                                            console.log("".concat(key, "  ").concat(value));
                                            resolve(null);
                                        }, 1000);
                                    })];
                                case 1:
                                    _c.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, hashMap_1 = hashMap;
                    _b.label = 1;
                case 1:
                    if (!(_i < hashMap_1.length)) return [3 /*break*/, 4];
                    _a = hashMap_1[_i], key = _a[0], value = _a[1];
                    return [5 /*yield**/, _loop_1(key, value)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
await printCar();
console.log("Thank you");
// console.log(hashMap)s
