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

console.log("Original array:", numbers);

function removeDuplicates(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
var noDuplicates = removeDuplicates(numbers);
console.log("No duplicates:", noDuplicates);

var ascending = noDuplicates.slice().sort((a, b) => a - b);
console.log("Ascending:", ascending);

var descending = noDuplicates.slice().sort((a, b) => b - a);
console.log("Descending:", descending);

function filterGreaterThan50(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 50) result.push(arr[i]);
  }
  return result;
}
console.log("Filtered >50 (user function):", filterGreaterThan50(noDuplicates));
console.log("Filtered >50 (built-in):", noDuplicates.filter(num => num > 50));

function getMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
function getMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
console.log("Max (user):", getMax(noDuplicates));
console.log("Min (user):", getMin(noDuplicates));

console.log("Max (Math):", Math.max.apply(null, noDuplicates));
console.log("Min (Math):", Math.min.apply(null, noDuplicates));
