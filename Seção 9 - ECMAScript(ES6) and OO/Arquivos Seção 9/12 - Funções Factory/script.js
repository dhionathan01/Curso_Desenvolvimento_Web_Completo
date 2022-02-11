// Funções Factory
let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'única',
    aro: 12,
    pedalar() {
        console.log('Método pedalar executando')
    }
}

let Bicicleta2 = {
    cor: 'Vermelha',
    marcha: '18',
    aro: 26,
    pedalar() {
        console.log('Método pedalar executando')
    }
}

console.log(Bicicleta1)
console.log(Bicicleta2)

// Fábrica de objetos literais:
let BicicletaFactory = function (cor, marcha, aro) {
    return {
        cor,
        marcha,
        aro,
        pedalar(){console.log('Método pedalar executado')}
    }
}

let Bicicleta3 = BicicletaFactory('Vermelha', '18', 26)
console.log(Bicicleta3)

let Bicicleta4 = BicicletaFactory('Vermelha', '21', 29)
console.log(Bicicleta4)





