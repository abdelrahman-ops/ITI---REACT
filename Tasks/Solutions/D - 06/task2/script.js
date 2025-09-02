
var size = parseInt(prompt("Enter the size of the array:"));
while (isNaN(size) || size <= 0) {
  size = parseInt(prompt("Invalid size. Enter a positive number:"));
}


var numbers = [];
for (var i = 0; i < size; i++) {
  var val = prompt("Enter number " + (i+1) + ":");
  while (isNaN(val) || val === "") {
    val = prompt("Invalid input. Enter a valid number for element " + (i+1) + ":");
  }
  numbers.push(Number(val));
}

console.log("Numbers array:", numbers);


function sumAll(arr) {
  return eval(arr.join('+'));
}
function productAll(arr) {
  return eval(arr.join('*'));
}

console.log("Sum (with parameter):", sumAll(numbers));
console.log("Product (with parameter):", productAll(numbers));


function sumAllNoParam() {
  return eval(numbers.join('+'));
}
function productAllNoParam() {
  return eval(numbers.join('*'));
}

console.log("Sum (no parameter):", sumAllNoParam());
console.log("Product (no parameter):", productAllNoParam());
