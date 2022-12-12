const form = document.getElementById('form')
let linhas = '';
const contatos = [];
const numeros = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    criaLinha()
    atualizaLinha()
})

function criaLinha() {
    const nomeContato = document.getElementById('nomeContato')
    let numeroContato = document.getElementById('numeroContato')
    var number = numeroContato.value
    number = number.toString().replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4")
    numeroContato = number


    if ((numeros.includes(numeroContato)) || (contatos.includes(nomeContato.value))) {
        alert(`O contato já foi adicionado!`)
    } else {
        contatos.push(nomeContato.value);
        numeros.push(numeroContato);

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`
        linha += `<td>${numeroContato}</td>`
        linha += '</tr>';

        linhas += linha;
    }

    nomeContato.value = '';
    const numeroContatoInput = document.getElementById('numeroContato')
    numeroContatoInput.value = '';
}

function atualizaLinha() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
