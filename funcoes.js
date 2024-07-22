const estudante  = {
    nome: 'José Silva',
    idade: 32,
    CPF: '12312312365',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['551199999999', '553186869595'],
    media: 7.5,
    estaAprovado: function(mediaBase){
        return this.media >= mediaBase ? true: false //MÉTODO THIS
    }
}

console.log(estudante.estaAprovado(7));
