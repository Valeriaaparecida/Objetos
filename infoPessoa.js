const pessoa ={
    nome: 'Valéria',
    idade: 36,
    solteiro: true,
    hobbies:['pedalar', 'assistir séries','musculação', 'comer pizza'],
}
pessoa.endereco = {
    rua: 'Rua Padrinhos Mágicos',
    cidade: 'Oregon',
    estado: 'Texas',
}
function mostrarInfoPessoa(obj){
    
    console.log(`Nome: ${obj.nome} (tipo: ${typeof obj.nome})`);
    console.log(`Idade: ${obj.idade} (tipo: ${typeof obj.idade})`);
    console.log(`Solteiro: ${obj.solteiro} (tipo: ${typeof obj.solteiro})`);
    console.log(`Hobbies: ${obj.hobbies} (tipo: ${typeof obj.hobbies})`);
    console.log(`Endereço: (tipo: ${typeof obj.endereco})`);
    console.log(`Rua: ${obj.endereco.rua} (Tipo: ${typeof obj.endereco.rua})`);
    console.log(`Cidade: ${obj.endereco.cidade} (Tipo: ${typeof obj.endereco.cidade})`);
    console.log(`Estado: ${obj.endereco.estado} (Tipo: ${typeof obj.endereco.estado})`);
}

mostrarInfoPessoa(pessoa);

