const estudante  = {
    nome: 'José Silva',
    idade: 32,
    CPF: '12312312365',
    turma: 'Javascript',
    bolsista: true,
    /*telefone1: '551199999999',
    telefone2: '553186869595' // EM VEZ DE REPETIR A PROPRIEDADE PODEMOS CRIAR UM ARRAY DE TELEFONES PORQUE 
    SE A PESSOA TIVER 5 OU 10 TELEFONES COMO FICARIA INVIAVEL COLCOAR DEZ PROPRIEDADES TELEFONE\\ */
    telefones: ['551199999999', '553186869595'],
}

//ACESSANDO APENAS UM DOS TELEFONES
console.log(estudante.telefones[0]);