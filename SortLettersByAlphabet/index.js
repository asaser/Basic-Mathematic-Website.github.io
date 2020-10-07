function sortedLettersByAlphabet(s) {
    var sorted = s.split("");
    sorted.sort();
    var border = sorted.join("");
    return border;

}

function showAlphabetText() {
    let s = document.getElementById("writeNewWord").value;
    let callAlphabetFunction = sortedLettersByAlphabet(s);
    
    document.getElementById("message").innerHTML = callAlphabetFunction;
}