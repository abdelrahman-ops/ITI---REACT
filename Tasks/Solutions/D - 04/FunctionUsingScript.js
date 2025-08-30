console.log("4.a) sumAny(10, 5) =", sumAny(10, 5));
console.log("4.b) buildFullName('Sara', 'Mostafa', 'Ali') =", buildFullName('Sara', 'Mostafa', 'Ali'));
console.log("4.c) factorial(5) =", factorial(5));
console.log("4.e) degreeToGrade(92) =", degreeToGrade(92));
console.log("4.f) sumWithDefaults(7) =", sumWithDefaults(7));
console.log("4.f) sumWithDefaults(undefined, 9) =", sumWithDefaults(undefined, 9));

console.log("4.g) scopingAndHoistingDemo() ->", scopingAndHoistingDemo());

function demoCalculator() {
  var a = parseInt(prompt("Enter first number:"));
  var b = parseInt(prompt("Enter second number:"));
  var op = prompt("Enter operation (+, -, *, /):");
  calculator(a, b, op);
}

function demoGrades() {
  var d = parseInt(prompt("Enter degree (0-100):"));
  alert("Grade: " + degreeToGrade(d));
}

function demoFactorial() {
  var n = parseInt(prompt("Enter a number:"));
  alert("Factorial = " + factorial(n));
}

function demoCharCodes() {
  var s = prompt("Enter a string:");
  var codes = stringToCharCodes(s);
  alert("Char codes: " + codes);
}
