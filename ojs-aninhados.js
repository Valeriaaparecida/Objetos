const estudante  = {
    nome: 'José Silva',
    idade: 32,
    CPF: '12312312365',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['551199999999', '553186869595'],
}

estudante.endereco = {
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43',
}

console.log(estudante);
console.log(estudante.endereco.rua);  // VAI ACESSAR A PROPRIEDADE DO OBJETO QUE É PROPRIEDADE DO OBJETO MAIOR

/*ATRAVES DESSE CASO TEMOS QUE CONCLUIR QUE AO CRIAR UMA ESTRUTURA DEVEMOS TER EM MENTE O MUNDO REAL PORQUE NESSE CASO
POR EXEMPLO UM ESTUDANTE NÃO TEM RUA MAS ELE TEM UM ENDEREÇO QUE TEM RUA ENTÃO FAZ MAIS SENTIDO FAZER UM OBJETO 
ENDEREÇO QUE TEM A PROPRIEDADE RUA DO QUE TER UMA PROPRIEDADE RUA NO OBJETO ESTUDANTE*/
