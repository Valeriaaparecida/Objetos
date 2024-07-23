
// O MÉTODO FOR IN PERCORRE O OBJETO 

const estudante  = {
    nome: 'José Silva',
    idade: 32,
    CPF: '12312312365',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['551199999999', '553186869595'],
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
for (let chave in estudante) {
    const tipo = typeof estudante [chave];
    if (tipo !== 'object' && tipo !== 'function'){
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
    }
    
}
