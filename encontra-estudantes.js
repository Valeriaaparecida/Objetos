const estudantes = require('./estudantes.json');

/*function buscaInformacao(lista, chave, valor){
    return lista.find ((estudante) => estudante[chave] === valor);
}*/

function buscaInformacao(lista, chave, valor){
    return lista.find ((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const telefoneEncontrado = buscaInformacao(estudantes, 'telefone', '1198123183');
console.log(telefoneEncontrado); // DARIA ERRO COM A FUNÇÃO COMENTADA
