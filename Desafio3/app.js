// Ex1
function olaMundo() {
    console.log('olá, mundo');
}

olaMundo();

// Ex2

function olaNome() {
    let nome = prompt('Digite o nome: ');
    console.log(`Olá, ${nome}!`);
}

olaNome();

// Ex3

function dobro(numero) {
    return parseInt(numero*2);
}

let respostaDobro = dobro(2);
console.log(respostaDobro);

// Ex4

function media(numero1, numero2, numero3) {
    return parseInt((numero1 + numero2 + numero3)/3);
}

let respostaMedia = media(2, 5, 2);
console.log(respostaMedia);


// Ex5
// não tinha pensado da forma simplificada que encontrei na resposta do curso
//tinha feito com if e usando variável como nas demais respostas

function maior(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}
console.log(maior(5, 20));


//Ex 6

function multiplica(numero) {
    return parseInt(numero*numero);
}

let respostaMultiplica = multiplica(5);
console.log(respostaMultiplica);