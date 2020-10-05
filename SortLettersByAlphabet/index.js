function sortedLettersByAlphabet(s) {
    var sorted = s.split("");
    sorted.sort();
    var border = sorted.join("");
    return border;

    // return s.split("").sort().join("");

}
alert("Word sorted: javascript");
alert(sortedLettersByAlphabet("javascript"));