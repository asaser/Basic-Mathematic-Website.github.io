// START Navbar
$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
// FINISH Navbar


// START Sum Of Squares

function squareNumber() {
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
    document.getElementById("sumMessageOne").innerHTML = sum;


    if ((Number(writeNumber[0]) && Number(writeNumber[1]) && Number(writeNumber[2]) && Number(writeNumber[3])) != '') {
        let multi = (Number(writeNumber[0]) * Number(writeNumber[1]) * Number(writeNumber[2]) * Number(writeNumber[3]) );
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if ((Number(writeNumber[1]) && Number(writeNumber[2]) && Number(writeNumber[3])) != '') {
        let multi = (Number(writeNumber[1]) * Number(writeNumber[2]) * Number(writeNumber[3]) );
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if ((Number(writeNumber[0]) && Number(writeNumber[2]) && Number(writeNumber[3])) != '') {
        let multi = (Number(writeNumber[0]) * Number(writeNumber[2]) * Number(writeNumber[3]) );
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if ((Number(writeNumber[0]) && Number(writeNumber[1]) && Number(writeNumber[3])) != '') {
        let multi = (Number(writeNumber[0]) * Number(writeNumber[1]) * Number(writeNumber[3]) );
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if ((Number(writeNumber[0]) && Number(writeNumber[1]) && Number(writeNumber[2])) != '') {
        let multi = (Number(writeNumber[0]) * Number(writeNumber[1]) * Number(writeNumber[2]) );
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if ((Number(writeNumber[1]) && Number(writeNumber[2]) && Number(writeNumber[3])) != '') {
        let multi = (Number(writeNumber[1]) * Number(writeNumber[2]) * Number(writeNumber[3]) );
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if ((Number(writeNumber[0]) && Number(writeNumber[1])) != '') {
        let multi = (Number(writeNumber[0]) * Number(writeNumber[1]));
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if ((Number(writeNumber[0]) && Number(writeNumber[2])) != '') {
        let multi = (Number(writeNumber[0]) * Number(writeNumber[2]));
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if ((Number(writeNumber[0]) && Number(writeNumber[3])) != '') {
        let multi = (Number(writeNumber[0]) * Number(writeNumber[3]));
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if ((Number(writeNumber[1]) && Number(writeNumber[2])) != '') {
        let multi = (Number(writeNumber[1]) * Number(writeNumber[2]));
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if ((Number(writeNumber[1]) && Number(writeNumber[3])) != '') {
        let multi = (Number(writeNumber[1]) * Number(writeNumber[3]));
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if ((Number(writeNumber[2]) && Number(writeNumber[3])) != '') {
        let multi = (Number(writeNumber[2]) * Number(writeNumber[3]));
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if (Number(writeNumber[0]) != '') {
        let multi = (Number(writeNumber[0]));
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if (Number(writeNumber[1]) != '') {
        let multi = (Number(writeNumber[1]));
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if (Number(writeNumber[2]) != '') {
        let multi = (Number(writeNumber[2]));
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else if (Number(writeNumber[3]) != '') {
        let multi = (Number(writeNumber[3]));
        document.getElementById("multiMessageTwo").innerHTML = multi;
    } else {
        alert("Please write Number");
    }
}

// FINISH Sum and Multi

//////////////////////////////////////////////////////////////////////////////

// START Fibonacci
function fibonaci(n) {
    if (n === 1 || n === 2) {

        return 1;

    } else if (n === 0) {

        return 0;

    } else if (n > 2) {

        let first = 1;
        let second = 1;
        let third = 0;

        for (var i = 0; i < n - 2; i++) {
            third = first + second;
            first = second;
            second = third;
        }

        return third;

    }
}

function showNumber() {
    let n = document.getElementById("newText").value;
    let calculate = fibonaci(n);
    let resultNumber = calculate;
    document.getElementById("fibonacciMessageThree").innerHTML = resultNumber;
}

// FINISH Fibonacci

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

//////////////////////////////////////////////////////////////////////////////

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


// START Calculator

// wyświetlanie liczb

function show(score) {
    document.getElementById("number_score").value += score;
}

// wyczyszczenie ekranu z liczb

function clean() {
    document.getElementById("number_score").value = "";
}

// równa się =

function equal() {
    let result = document.getElementById("number_score").value;

    document.getElementById("number_score").value = eval(result);
}


// usunięcie jednej liczby

function undo() {
    let result = document.getElementById("number_score").value;

    document.getElementById("number_score").value = result.substring(0, result.length - 1);
}



// All angle
// skrócić trochę kod lub polączyć w jedno aby mniej miejsca zajmowało

function sinus() {
    let result = document.getElementById("number_score").value;

    document.getElementById("number_score").value = Math.sin(result);
}

function cosinus() {
    let result = document.getElementById("number_score").value;

    document.getElementById("number_score").value = Math.cos(result);
}

function tangens() {
    let result = document.getElementById("number_score").value;

    document.getElementById("number_score").value = Math.tan(result);
}

function cotangens() {
    let result = document.getElementById("number_score").value;

    document.getElementById("number_score").value = 1 / Math.tan(result);
}


// percent
function percent() {
    let result = document.getElementById("number_score").value;
    let num = result / 100;

    document.getElementById("number_score").value = num;
}

// squared
function squared() {
    let result = document.getElementById("number_score").value;
    let squar = result * result;

    document.getElementById("number_score").value = squar;
}



// FINISH Calculator

//////////////////////////////////////////////////////////////////////////////