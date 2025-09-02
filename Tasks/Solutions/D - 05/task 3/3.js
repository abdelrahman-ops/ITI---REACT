
function countE() {
    var inputStr = prompt("Please enter a string:");
    if (inputStr === null) return;
    var count = 0;
    for (var i = 0; i < inputStr.length; i++) {
        var ch = inputStr.charAt(i);
        if (ch === 'e' || ch === 'E') {
        count++;
        }
    }
    alert("The string: '" + inputStr + "'\nContains " + count + " 'e' character(s).");
}

function checkPalindrome() {
    var inputStr = prompt("Please enter a string to check if it's a palindrome:");
    if (inputStr === null) return;
    var isCaseSensitive = confirm("Should the check be case-sensitive?");
    var processedStr = inputStr;
    if (!isCaseSensitive) {
        processedStr = processedStr.toLowerCase();
    }
    var cleanStr = "";
    for (var i = 0; i < processedStr.length; i++) {
        var c = processedStr.charAt(i);
        if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') || (c >= 'A' && c <= 'Z')) {
        cleanStr += c;
        }
    }
    var isPalindrome = true;
    for (var j = 0; j < Math.floor(cleanStr.length / 2); j++) {
        if (cleanStr.charAt(j) !== cleanStr.charAt(cleanStr.length - 1 - j)) {
        isPalindrome = false;
        break;
        }
    }
    var msg = "The string: '" + inputStr + "'\n";
    msg += "Case sensitivity: " + (isCaseSensitive ? "Enabled" : "Disabled") + "\n";
    msg += "Is it a palindrome? " + (isPalindrome ? "YES" : "NO");
    alert(msg);
}

countE();
checkPalindrome();
