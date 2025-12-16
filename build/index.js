"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const buttonSoma = document.getElementById('buttonSomar');
const buttonSubtrair = document.getElementById('buttonSubtrair');
function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
buttonSoma.addEventListener('click', function () {
    const resultado = somar(Number(input1.value), Number(input2.value));
    console.log(resultado);
});
buttonSubtrair.addEventListener('click', function () {
    const resultado = subtrair(Number(input1.value), Number(input2.value));
    console.log(resultado);
});
