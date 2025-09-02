function capitalizeWords(str) {
    var words = str.split(" ");
    var result = "";
    for (var i = 0; i < words.length; i++) {
        var first = words[i].charAt(0).toUpperCase();
        var rest = words[i].substring(1);
        result = result.concat(first, rest, " ");
    }
    return result;
}

function sortStringAlpha(str) {
    var chars = str.split("");
    for (var i = 0; i < chars.length; i++) {
        for (var j = i + 1; j < chars.length; j++) {
            if (chars[j].charCodeAt(0) < chars[i].charCodeAt(0)) {
                var temp = chars[i];
                chars[i] = chars[j];
                chars[j] = temp;
            }
        }
    }
    var result = "";
    for (var k = 0; k < chars.length; k++) {
        result = result.concat(chars[k]);
    }
    return result;
}

function longestWord(str) {
    var words = str.split(" ");
    var maxWord = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > maxWord.length) {
            maxWord = words[i];
        }
    }
    return maxWord;
}

function swapCase(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (c >= "a" && c <= "z") {
            result = result.concat(c.toUpperCase());
        } else if (c >= "A" && c <= "Z") {
            result = result.concat(c.toLowerCase());
        } else {
            result = result.concat(c);
        }
    }
    return result;
}

function uniqueChars(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (result.indexOf(str.charAt(i)) === -1) {
            result = result.concat(str.charAt(i));
        }
    }
    return result;
}

function randomValue() {
    return Math.floor(Math.random() * 10);
}

function circleArea(radius) {
    if (!radius) radius = 5;
    return Math.PI * Math.pow(radius, 2);
}
