const contaBancaria = {
    titular: 'Roberto Rodrigues Bolanhos',
    saldo: 30517,
    depositar: function(valor) {
      this.saldo += valor;
    },
    sacar: function(subtraendo) {
      return this.saldo >= subtraendo ? this.saldo -= subtraendo : 'Saldo insuficiente';
    }
  };
  
  const cliente = {
    nome: 'Roberto Rodrigues Bolanhos',
    conta: contaBancaria,
    mostrarSaldo: function() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Saldo: ${this.conta.saldo}`);
    }
  };
  
  // Realizando operações de depósito e saque
  cliente.conta.depositar(100);
  cliente.conta.sacar(517);
  
  // Exibindo as informações atualizadas
  cliente.mostrarSaldo();
  