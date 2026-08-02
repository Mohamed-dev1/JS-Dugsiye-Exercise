//Exercise 30
 // more on callback

function isii(a, b, calback) {
  return calback(a, b);
}

function add(a, b) {
  return a + b;
}

function subtact(a, b) {
  return a - b;
}

function multiply(a,b) {
    return a*b
}

function Devide(a,b) {
    return a/b
}

console.log("add", isii(2, 3, add));
console.log("subtract", isii(5, 3, subtact));
console.log("Multiply",isii(5,5,multiply))
console.log("Devided",isii(10,5,Devide))