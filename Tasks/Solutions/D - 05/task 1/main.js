var s1 = prompt("Enter a string to capitalize words:");
alert("1) Capitalize Words:\n" + capitalizeWords(s1));

var s2 = prompt("Enter a string to sort its letters alphabetically:");
alert("2) Alphabetical Order:\n" + sortStringAlpha(s2));

var s3 = prompt("Enter a string to find its longest word:");
alert("3) Longest Word:\n" + longestWord(s3));

var s4 = prompt("Enter a string to swap case:");
alert("4) Swap Case:\n" + swapCase(s4));

var s5 = prompt("Enter a string to extract unique characters:");
alert("5) Unique Characters:\n" + uniqueChars(s5));

alert("6) Random Number (0-9): " + randomValue());

var r = prompt("Enter circle radius (leave blank for 5):");
alert("7) Circle Area:\n" + circleArea(Number(r)));
