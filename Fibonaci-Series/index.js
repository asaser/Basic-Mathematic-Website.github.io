function fibonaci(n) {
  if (n == 1 || n == 2) {

    return 1;

  } else if (n == 0) {

    return 0;

  } else if ( n > 2) {

    let a = fibonaci(n-2);
    let b = fibonaci(n-1);

    let result = a + b;

    return result;
  }
}

function showNumber() {
  let n = document.getElementById("newText").value;
  let calculate = fibonaci(n);
  let resultNumber = calculate;
  document.getElementById("message").innerHTML = resultNumber;
}