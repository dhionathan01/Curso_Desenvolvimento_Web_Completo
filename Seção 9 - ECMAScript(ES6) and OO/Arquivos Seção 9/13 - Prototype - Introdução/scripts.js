// Prototype

// Objeto aviao
// atributos cor e modelo; método levantarVoo

// Objeto literal
let a1 = {
    cor: 'Branco',
    modelo: 'Airbus a380',
    levantarVoo: function () {
        console.log('Levantar Voo')
    }
}

// função construtora
let AviaoF = function () {
    this.cor = 'Azul',
    this.modelo = 'Boeing 787',
    this.levantarVoo = function(){console.log('Levantar Voo')}
}

let a2 = new AviaoF()

class AviaoC {
    constructor() {
        this.cor = 'Vermelho',
        this.modelo = 'Embraer E-Jets',
        this.levantarVoo = function(){console.log('Levantar Voo')}
    }
}

let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)

// Todos os Objetos descendem de objetct que não é um objeto e sim uma função
