// UTILIZANDO O SPREAD OPRATOR OU OPERADOR DE ESPALHAMENTO

const estudante  = {
    nome: 'José Silva',
    idade: 32,
    CPF: '12312312365',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['551199999999', '553186869595', '552244447788'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43',
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
}

function exibirTelefones(telefone1, telefone2){
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}


exibirTelefones(...estudante.telefones);
    
//const dadosEnvio = {
    //destinatario : estudante.nome,
   // //endereco: estudante.enderecos[0]  /*ESSA NOTAÇÃO NÃO É MUITO INTERESSANTE PORQUE FICA UM OBJETO ESPALHADO DENTRO DE
                                        //UM OUTRO OBJETO*/
//}

//const dadosEnvio = {
    //destinatario : estudante.nome,
    //rua: estudante.enderecos[0].rua,  /*ESSA NOTAÇÃO NÃO É MUITO INTERESSANTE PORQUE VOCE TEM QUE FICAR PEGANDO 
                                    // DENTRO DO OBJETO MANUALMENTE */
//}


const dadosEnvio = {
    destinatario : estudante.nome,
    ...estudante.enderecos[0]  /*UTILIZANDO O ESPALHAMENTO VOCE CONSEGUE PEGAR AS PROPRIEDADES DO OBJETO ENDERECO
                                DE FORMA ESPALHADA VOCE CRIA UM NOVO OBJETO COM INFORMAÇOES DE UM OUTRO OBJETO  */
}