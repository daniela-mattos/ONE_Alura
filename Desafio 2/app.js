let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function botaoClicado() {
    console.log('Botão clicado!')
}

function alertaClique() {
    alert('Eu acho JS um saco!');
}

function cidadeClique() {
    let cidade = prompt('Informe uma cidade: ');
    alert(`Estive na cidade ${cidade} e lembrei de você.`);
}

function soma() {
    let valor1, valor2;
    valor1 = parseInt(prompt('Informe um número: '));
    valor2 = parseInt(prompt('Informe outro número: '));
    let soma = valor1 + valor2;
    alert("A soma de " + valor1 + " e " + valor2 + " é " + soma);
}