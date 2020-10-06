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
    document.getElementById("message").innerHTML = resultText;
}
