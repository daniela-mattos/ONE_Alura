//Exercício 1

function calculaImc(altura, peso) {
    let resposta = parseFloat(peso/(altura * altura));
    console.log(`IMC = ${resposta}`);
}

calculaImc(1.80, 60);


// Exercício 2

function fatorial(numero) {
    resposta = numero;
    while(numero > 1) {
        resposta = resposta * (numero - 1);
        numero--;
    }
}
fatorial(4);
console.log(`Fatorial = ${resposta}`);


// Exercício 3

function dolarReal(quantidade) {
    return quantidade * 4.80;
}
let resp = dolarReal(5);
console.log(`5 Dólares = ${resp} reais`);


// Exercício 4

function area(altura, largura) {
    console.log("Área = " + (altura*largura));
    console.log("Perímetro = " + largura*4);
}
area(2, 4);

// Exercício 5

function areaCirculo(raio) {
    console.log("Área do Círculo = " + ((raio * raio) * 3.14));
    console.log("Perímetro do Círculo = " + ((2 * 3.14) * raio));
}
areaCirculo(5);


// Exercício 5

function tabuada(numero) {
    contador = 1;
    while(contador <= 10) {
        console.log(`${numero} x ${contador} = ${numero*contador}`);
        contador++;
    }
}
tabuada(10);