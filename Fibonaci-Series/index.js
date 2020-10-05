function fibonaci(n) {
  if (n === 1 || n === 2) {

    return 1;

  } else if (n === 0) {

    return 0;

  } else if ( n > 2) {

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
  document.getElementById("message").innerHTML = resultNumber;
}
