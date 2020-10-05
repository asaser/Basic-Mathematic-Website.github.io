function reverseString(r) {
    var array = r.split("");
    array.reverse();
    var border = array.join("");
    return border;

    //return r.split("").reverse().join("");
}

alert("Reverse Word Sort: javascript");
alert(reverseString("javascript"));