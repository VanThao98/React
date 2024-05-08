//  TODO 1 : In Math.js Export all  functions and constants
// import {add, subtract, PI} from "./math.js"; nếu dùng lệnh này thì phải xóa math khi gọi nó
//  TODO 2 : In main.js : Import all functions and constants from MATH module
import * as math from "./math.js";
//  TODO 3 : In package.json add the following property         {  "type": "module"  }

// TODO 4 : Test this code

// Help  ?            https://www.scaler.com/topics/nodejs/require-vs-import-nodejs/

console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(10, 4)); // Output: 6
console.log("PI = " + math.PI); // Output: 3.14159265359
