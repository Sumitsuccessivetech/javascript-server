"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// equilateral pattern program
let a;
//equilateral(5)
function equilateral(a) {
    console.log("print a equilateral triangle " + a);
    let b;
    if (a < 2 && a > 10)
        return (0);
    for (let i = 1; i <= a; i++) {
        b = " ";
        for (let j = i; j <= a; j++) {
            b += " ";
        }
        for (let k = i; k > 0; k--) {
            b += "* ";
        }
        console.log(b);
    }
}
exports.default = equilateral;
//# sourceMappingURL=equilateral.js.map