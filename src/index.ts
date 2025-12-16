const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;
const buttonSoma = document.getElementById('buttonSomar') as HTMLElement;
const buttonSubtrair = document.getElementById('buttonSubtrair') as HTMLElement;

function somar(a: number, b: number): number {
    return a + b;
}

function subtrair(a: number, b: number): number {
    return a - b;
}

buttonSoma.addEventListener('click', function () {
    const resultado = somar(Number(input1.value), Number(input2.value));
    console.log(resultado);
})

buttonSubtrair.addEventListener('click', function () {
    const resultado = subtrair(Number(input1.value), Number(input2.value));
    console.log(resultado);
})