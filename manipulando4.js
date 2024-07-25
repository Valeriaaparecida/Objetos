const pessoas = [  
  {nome: 'Bruce Lee',
   idade: 35,   
   cidade: 'Los Angeles'
  },
  {nome: 'Ben Teninson',
   idade: 16,   
   cidade: 'Los Alamos'
  },
  {nome: 'Bruce Wayne',
   idade: 35,   
   cidade: 'Gotham City'
  }
                 ]
    

  pessoas.push({
    nome: 'Peter Parker',
    idade: 22,
    cidade: 'Nova York'
  })                  
   /* pessoas.forEach(mostrarListaPessoas)
    function mostrarListaPessoas(pessoa){
      console.log(`nome: ${pessoa.nome}`);
      console.log(`idade: ${pessoa.idade}`);
      console.log(`cidade: ${pessoa.cidade}`);
      console.log('--------------------');
      
      }*/
function filtrarPorCidade(lista, valor){
  return pessoas.filter((pessoa) => {
    return pessoa.cidade === valor;
  });
 
  
}
    
const resultado = filtrarPorCidade(pessoas, 'Los Alamos');
  
    console.log(resultado);
    
