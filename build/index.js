"use strict";
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var buttonSoma = document.getElementById('buttonSomar');
var buttonSubtrair = document.getElementById('buttonSubtrair');
var spanResultado = document.getElementById('resultado');
function operacao(_a) {
    var tipo = _a.tipo, a = _a.a, b = _a.b;
    if (tipo === "SOMAR") {
        return a + b;
    }
    else {
        return a - b;
    }
}
buttonSoma.addEventListener('click', function () {
    var resultado = operacao({
        tipo: "SOMAR",
        a: Number(input1.value),
        b: Number(input2.value),
    });
    spanResultado.textContent = resultado.toString();
});
buttonSubtrair.addEventListener('click', function () {
    var resultado = operacao({
        tipo: "SUBTRAIR",
        a: Number(input1.value),
        b: Number(input2.value)
    });
    spanResultado.textContent = resultado.toString();
});
