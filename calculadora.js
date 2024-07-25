const calculadora = {
    soma:function(a,b){
        return a + b;
    },
    subtracao:function(a,b){
        return a - b;
    },
    multiplicacao:function(a,b){
        return a * b;
    },
    divisao:function(a,b){
        if(b !== 0){
            return a / b;
        }else{
            return "Divisão por zero não é permitida"
        }
    }
    
}

console.log(`soma:${calculadora.soma(78, 265)}`);
console.log(`subtração:${calculadora.subtracao(78, 265)}`);
console.log(`multiplicação:${calculadora.multiplicacao(78, 265)}`);
console.log(`divisão:${calculadora.divisao(78, 265)}`);

calculadora.calculaMedia = function(lista){
    let soma = 0
    let media = 0;
   for(let valor of lista){
    soma += valor;
   } 
  return media = soma/lista.length;
}

console.log(`soma:${calculadora.soma(48, 91)}`);
console.log(`subtração:${calculadora.subtracao(48, 91)}`);
console.log(`multiplicação:${calculadora.multiplicacao(48, 91)}`);
console.log(`divisão:${calculadora.divisao(48, 91)}`);
console.log(`media:${calculadora.calculaMedia([23, 45, 78, 91, 6])}`);

