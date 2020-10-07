// START Sum Of Squares

function squared() {
    let result = document.getElementById("Number").value;
    let squar = result * result;
    document.getElementById("squaresMessageOne").innerHTML = squar;
}

// FINISH Sum Of Squares

//////////////////////////////////////////////////////////////////////////////

// START Sum and Multi

function finishCount() {
    let writeNumber = [
        document.getElementById("firstNumber").value,
        document.getElementById("secondNumber").value,
        document.getElementById("thirdNumber").value,
        document.getElementById("fourthNumber").value
    ];

    let sum = Number(writeNumber[0]) + Number(writeNumber[1]) + Number(writeNumber[2]) + Number(writeNumber[3]);
    document.getElementById("sumMessageTwo").innerHTML = sum;

    let multi = Number(writeNumber[0]) * Number(writeNumber[1]) * Number(writeNumber[2]) * Number(writeNumber[3]);
    document.getElementById("multiMessageOne").innerHTML = multi;
}

// FINISH Sum and Multi


// START Sort Letters By Alphabet
function sortedLettersByAlphabet(s) {
    var sorted = s.split("");
    sorted.sort();
    var border = sorted.join("");
    return border;

}

function showAlphabetText() {
    let s = document.getElementById("writeNewWord").value;
    let callAlphabetFunction = sortedLettersByAlphabet(s);
    
    document.getElementById("alphabetMessageThree").innerHTML = callAlphabetFunction;
}

// FINISH Sort Letters By Alphabet


// START Fibonacci

// FINISH Fibonacci


// START Reverse Sort Letters
function reverseString(r) {
    let array = r.split('');
    array.reverse();
    let border = array.join('');
    return border;    
}

function showText() {
    let r = document.getElementById("writeWord").value;
    let reverseLetter = reverseString(r);
    let resultText = reverseLetter;
    document.getElementById("reverseMessageThree").innerHTML = resultText;
}

// FINISH Reverse Sort Letters