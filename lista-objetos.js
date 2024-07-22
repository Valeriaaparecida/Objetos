const estudante  = {
    nome: 'José Silva',
    idade: 32,
    CPF: '12312312365',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['551199999999', '553186869595'],
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43',
    }]
}


estudante.endereco.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: ''
})
/*console.log(estudante.endereco);
console.log(estudante.endereco[0]);*/

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);
console.log(listaEnderecosComComplemento);
