var a = 1;
var b = 2;
var c = 3;
var d = 4;

var table = [a, b, c, d];

function countNumber(a, b, c, d) {
    var sum = 0;
    var mmulti = 1;

    for (var i = 0; i < table.length; i++) {
        sum += table[i];
        mmulti *= table[i];
    }
}

function finishCount() {
    var a = document.getElementById("firstNumber").value;
    var b = document.getElementById("secondNumber").value;
    var c = document.getElementById("thirdNumber").value;
    var d = document.getElementById("fourthNumber").value;

    var counting = countNumber(a, b, c, d);
    var resultCounting = counting;

    document.getElementById("message").innerHTML = resultCounting;
}

// console.log("Suma: " + sum);
// console.log("Iloczyn: " + mmulti);