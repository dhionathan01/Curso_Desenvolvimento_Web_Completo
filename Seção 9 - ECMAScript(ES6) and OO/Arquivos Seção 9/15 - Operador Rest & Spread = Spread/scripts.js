//contexto spread

//string

let tituloArtigo = 'Como utilizar o operador rest/spread'

console.log(tituloArtigo)
// Observe que usando o spread cada caracter é impresso indivudalmente:
console.log(...tituloArtigo)
// Também podemos atribuir o o texto dentro de um array dando um índice para cada caracter:
console.log([...tituloArtigo])

// arrays

let listaCurso1 = ['NodeJS e MongoDB', 'ES6, TypeScript e Angular 4']
let listaCurso2 = ['Multiplataforma Android/IOS', 'Introdução ao GNU/Linux']
// Espelhando com spread dentro da listaCursosCompleto, os conteudos da listaCurso1 e listaCurso2
let listaCursosCompleto = ['Web Completo', 'Android Completo', ...listaCurso1, ...listaCurso2]
console.log(listaCursosCompleto)

// Usando spread em Objetos:

let pessoa = {nome: 'João', idade: 27}
let clone = { endereco: 'Rua Abc', ...pessoa } 
console.log(clone)

// CONLUSÃO: O spread pega os dados e distribuir esses dados dentro de outras estruturas