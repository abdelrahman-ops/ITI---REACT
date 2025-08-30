// Part 4 — All functions

// 4.a) Sum of two inputs (any type).
function sumAny(a, b) {
  return a+ b;
}

// 4.b) Full name from first, middle, last
function buildFullName(first, middle, last) {
  return first + " " + middle + " " + last;
}

// 4.c) Factorial of a user-provided input
function factorial(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// 4.d) Calculator: (number1, number2, operation) -> returns value and alerts it
function calculator(n1, n2, op) {
  var result;
  switch (op) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n2 !== 0 ? n1 / n2 : "Error: Division by zero";
      break;
    default:
      result = "Invalid operation";
  }
  alert("Result: " + result);
  return result;
}

// 4.e) Degree to Grade
function degreeToGrade(deg) {
  var grade;
  if (deg >= 85) {
    grade = "Excellent";
  } else if (deg >= 75) {
    grade = "VGood";
  } else if (deg >= 60) {
    grade = "Good";
  } else {
    grade = "Fail";
  }
  return grade;
}

// 4.f) Two inputs with default values; return sum as a local variable
function sumWithDefaults(a, b) {
  if (a == undefined) {
    a = 0;
  }
  if (b == undefined) {
    b = 0;
  }
  var s = a + b;
  return s;
}

// 4.g) Demonstrate local vs global + hoisting
var globalVar = "I am global";

function scopingAndHoistingDemo() {
  console.log("Before declaring localVar:", localVar);
  var localVar = "I am local";
  console.log("After declaring localVar:", localVar);
  return localVar;
}

// 4.h) Bonus — string to char codes
function stringToCharCodes(str) {
  var codes = [];
  for (var i = 0; i < str.length; i++) {
    codes.push(str.charCodeAt(i));
  }
  return codes;
}
