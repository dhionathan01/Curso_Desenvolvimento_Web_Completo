// Funções construtoras uma forma mais retrôgrada de implmentação de OO dentro do JS.

// Criando um objetio a partir de uma função
let Carro = function () {
    // Como não se trata de uma construção baseada em class, não utilizamos o constructor
    this.cor = 'Amarelo'
    this.modelo = 'Chevete'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180
    // Métodos de objetos criados apartir de um função também possui o this, basicamente estamos criando um atributo que recebe uma função.
    this.acelerar = function () {
        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }
    // Criando os getters e setters que operam sob a velicudade visando respeitar o pilar do encapsulamento
    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function (velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
}
// Para criarmos um objeto com base em uma função construtora utilizamos o operador new, semelhante como utilizamos em uma classe, no geral uma função construtora tem o papel de definição da classe do objeto que queremos criar.

let carro = new Carro()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)
