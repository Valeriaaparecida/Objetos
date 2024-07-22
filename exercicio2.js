let anoAtual = new Date().getFullYear();


const livro ={
    titulo:  'Os pequenos Jangadeiros',
    autor: 'Aristides Fraga Lima',
    anoPublicacao: 1987,
    genero: 'Aventura'
}

livro.idadePublicacao = anoAtual - livro.anoPublicacao;
livro.mostraDetalhe ="Detalhes do Livro:\n" +
"Título:" + livro.titulo +"\n" +
"Autor:" + livro.autor +"\n" +
"Ano de Publicação:" + livro.anoPublicacao +"\n" +
"Gênero:" + livro.genero +"\n" +
"Idade da Publicação:" + livro.idadePublicacao + " anos";
console.log(livro.mostraDetalhe);