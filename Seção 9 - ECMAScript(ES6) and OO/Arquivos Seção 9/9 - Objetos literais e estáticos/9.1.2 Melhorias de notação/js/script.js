/* Script Objetos literais  */

let nome = 'Jorge'
let idade = 29
let sexo = 'Masculino'
let profissao = 'Programador'

let objeto = {
    // O java script tem inteligencia suficente pra enteder que as variáveis a esquerda são atributos do objeto, como se houvesse um this nos atributos
    // atributo : valor
    // nome : 'Jorge'
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function () {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

let objeto2 = {
    // No ES6 o javascript tem capacidade de entender caso não seja específicado o nome do atributo que ele contém o mesmo nome da vairável que atribui seu valor:
    nome, // nome = nome variável / valor = valor da variavel
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
    }
}

console.log(objeto)
objeto.exibirResumo()
console.log(objeto2)
objeto2.exibirResumo()
