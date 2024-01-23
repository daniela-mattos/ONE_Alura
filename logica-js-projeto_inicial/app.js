// Exercicio 1
alert('Boas vindas ao jogo numero secreto!');

let numeroSecreto = 4;
console.log(numeroSecreto);

let chute = prompt('Escolha um número entre 1 e 10');
console.log(chute);


console.log('Resultado da comparação:', chute == numeroSecreto);


if (chute == numeroSecreto) {
    alert(`Isso aí, você acertou o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou!')
}