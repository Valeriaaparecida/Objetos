const estudante  = {
    nome: 'José Silva',
    idade: 32,
    CPF: '12312312365',
    turma: 'Javascript'
}

estudante.nome // José

function exibeInfoEstudante(objEstudante, inforEstudante){
    return objEstudante[inforEstudante];
}

console,log(estudante);
console.log(estudante['nome']);
console.log(estudante['CPF']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante));


