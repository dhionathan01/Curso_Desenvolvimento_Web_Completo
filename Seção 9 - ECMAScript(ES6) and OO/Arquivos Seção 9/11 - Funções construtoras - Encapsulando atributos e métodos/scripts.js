// Função construtora - Encapsulando atributos e métodos

let Carro = function () {
    this.cor = 'Amarelo'
    this.modelo = 'Chevete'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180
    this.acelerar = function () {
        let velocidade = this.getVelocidadeAtual() + 50
        if (velocidade > this.velocidadeMaxima) {
            velocidade = this.velocidadeMaxima
            console.log('Limite de velocidade Atingido')
        }
        this.setVelocidadeAtual(velocidade)
    }
    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function (velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro = new Carro()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log('Modificando velocidade máxima')
carro.velocidadeMaxima = 230 // Observe que o atributo pode ser modificado livremente
console.log(carro.velocidadeAtual)
carro.acelerar()
console.log(carro.velocidadeAtual)


let Carro2 = function () {
    // Fazendo dessa forma nos impedimos que a variável tenha seu valor modificado, fora da função.
    var velocidadeMaxima = 180
    var quilometrosRodados = 0
    this.cor = 'Amarelo'
    this.modelo = 'Chevete'
    this.velocidadeAtual = 0
    this.acelerar = function () {
        let velocidade = this.getVelocidadeAtual() + 50
        if (velocidade > velocidadeMaxima) {
            velocidade = velocidadeMaxima
            console.log('Limite de velocidade Atingido')
        }
        this.setVelocidadeAtual(velocidade)
    }
    this.getVelocidadeAtual = function () {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function (velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
        setQuilometrosRodados(0.07)
        console.log(`Km rodados: ${quilometrosRodados}`)
    }
    var setQuilometrosRodados = function(q){
        quilometrosRodados += q
    }
}
console.log('Carro 2')
let carro2 = new Carro2()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log('Modificando velocidade máxima')
carro.velocidadeMaxima = 300
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)

console.log(carro)
console.log(carro2)
