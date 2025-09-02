function runProgram() {
  // Step 1: Ask for array size
  var size = parseInt(prompt("Enter the size of the array:"));
  while (isNaN(size) || size <= 0) {
    size = parseInt(prompt("Invalid size. Please enter a positive number:"));
  }

  // Step 2: Receive array elements
  var arr = [];
  for (var i = 0; i < size; i++) {
    var value = prompt("Enter number " + (i + 1) + ":");
    while (isNaN(value) || value === "" || value === null) {
      value = prompt("Invalid input. Enter a valid number for element " + (i + 1) + ":");
    }
    arr.push(Number(value));
  }

  // Step 3: Menu loop
  var repeat = true;
  while (repeat) {
    var choice = prompt(
      "Choose an option:\n" +
      "a: Display array in original order\n" +
      "b: Display array in ascending order\n" +
      "c: Display array in descending order\n" +
      "d: Display reversed version of original array\n" +
      "e: Display even numbers only\n" +
      "f: Display numbers divisible by a given number\n" +
      "g: Display new array with 30% discount\n" +
      "h: Display concatenated string of numbers with ***"
    );

    switch (choice.toLowerCase()) {
      case 'a':
        alert("Original array: " + arr.join(", "));
        break;

      case 'b':
        var ascending = arr.slice().sort(function(a, b){ return a - b; });
        alert("Ascending order: " + ascending.join(", "));
        break;

      case 'c':
        var descending = arr.slice().sort(function(a, b){ return b - a; });
        alert("Descending order: " + descending.join(", "));
        break;

      case 'd':
        var reversed = arr.slice().reverse();
        alert("Reversed array: " + reversed.join(", "));
        break;

      case 'e':
        var evenNumbers = arr.filter(function(num){ return num % 2 === 0; });
        if (evenNumbers.length > 0) {
          alert("Even numbers: " + evenNumbers.join(", "));
        } else {
          alert("No even numbers in the array.");
        }
        break;

      case 'f':
        var divisor = parseInt(prompt("Enter a number to check divisibility:"));
        while (isNaN(divisor)) {
          divisor = parseInt(prompt("Invalid input. Enter a valid number:"));
        }
        var divisible = arr.filter(function(num){ return num % divisor === 0; });
        if (divisible.length > 0) {
          alert("Numbers divisible by " + divisor + ": " + divisible.join(", "));
        } else {
          alert("No numbers divisible by " + divisor + ".");
        }
        break;

      case 'g':
        var discounted = arr.map(function(num){ return (num * 0.7).toFixed(2); });
        alert("Array with 30% discount: " + discounted.join(", "));
        break;

      case 'h':
        var concatenated = arr.join("***");
        alert("Concatenated string: " + concatenated);
        break;

      default:
        alert("Invalid choice. Please select a valid letter.");
        break;
    }

    // Ask if user wants to repeat
    var again = prompt("Do you want to run again? (yes/no):");
    if (!again || again.toLowerCase() !== "yes") {
      repeat = false;
      alert("Program ended.");
    }
  }
}

// Run the program
runProgram();
