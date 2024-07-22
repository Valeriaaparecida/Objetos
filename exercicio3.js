let anoAtual = new Date().getFullYear();


const livro ={
    titulo:  'Os pequenos Jangadeiros',
    autor: 'Aristides Fraga Lima',
    anoPublicacao: 1987,
    genero: 'Aventura',
    idadePublicacao: anoAtual - 1987
}

console.log("Detalhe do Livro:");
console.log("Titulo:" + livro['titulo']);
console.log(`Autor: ${livro['autor']}`);
console.log('Ano de Publicação' + livro['anoPublicacao']);
console.log(`Gênero: ${livro['genero']}`);
console.log(`Idade de Publicação ${livro['idadePublicacao']}`);
