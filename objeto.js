const estudante  = {
    nome: 'José Silva',
    idade: 32,
    CPF: '12312312365',
    turma: 'Javascript',
}

console.log(estudante.nome);
console.log(`O nome do eestudante é ${estudante.nome}`);
console.log(`Os três primeiros números do CPF são ${estudante.CPF.substring(0,3)}`);