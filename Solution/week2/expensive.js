const { clear } = require("console");
const fs = require("fs");

const a = fs.readFileSync("./sample.html", "utf-8");
console.log(a);
const length = a.length;

let final = "";
for (let i = 1; i < length; i++) {
  if (a[i] !== " ") {
    final += a[i];
  }
}
console.log({ final });
