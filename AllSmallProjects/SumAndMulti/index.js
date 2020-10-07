function finishCount() {
    let writeNumber = [
        document.getElementById("firstNumber").value,
        document.getElementById("secondNumber").value,
        document.getElementById("thirdNumber").value,
        document.getElementById("fourthNumber").value
    ];

    let sum = Number(writeNumber[0]) + Number(writeNumber[1]) + Number(writeNumber[2]) + Number(writeNumber[3]);
    document.getElementById("sumMessage").innerHTML = sum;

    let multi = Number(writeNumber[0]) * Number(writeNumber[1]) * Number(writeNumber[2]) * Number(writeNumber[3]);
    document.getElementById("multiMessage").innerHTML = multi;
}