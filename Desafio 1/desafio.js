/*
let nome = 'Mitsy';
console.log('Olá, ' + nome);

alert('Olá, ' + nome + '!');

let resposta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(resposta);

let valor1 = 2;
let valor2 = 3;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é: ${resultado}`);

let resultadoSub = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é: ${resultadoSub}`);

let idade = prompt('Informe sua idade: ');

if (idade < 18) {
    console.log('Você é menor de idade.');
} else {
    console.log('Você é maior de idade.');
}

let numero = prompt('Informe um número: ');

if (numero == 0) {
    alert('O número é zero.');
} if (numero < 0) {
    alert('O número é negativo.');
  } else {
    alert('O número é positivo.');
  }
*/
let contador = 1;
while (contador <=10) {
    console.log(contador);
    contador++;
}

let nota = 10;
if (nota >=7) {
    console.log('Aprovado!')
} else {
    console.log('Rerovado!')
}

//forma 1
let aleatorio = parseInt(Math.random() * 10 + 1);
console.log(aleatorio);

//forma 2
console.log(parseInt(Math.random() * 10 + 1));

console.log(parseInt(Math.random() * 100 + 1));
