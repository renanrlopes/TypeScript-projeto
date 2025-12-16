"use strict";
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var buttonSoma = document.getElementById('buttonSomar');
var buttonSubtrair = document.getElementById('buttonSubtrair');
function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
buttonSoma.addEventListener('click', function () {
    var resultado = somar(Number(input1.value), Number(input2.value));
    console.log(resultado);
});
buttonSubtrair.addEventListener('click', function () {
    var resultado = subtrair(Number(input1.value), Number(input2.value));
    console.log(resultado);
});
