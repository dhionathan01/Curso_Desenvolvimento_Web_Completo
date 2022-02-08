// Objetos literais: Objetos Únicos

let assinatura = {
    idCliente: 1000,
    descricao: 'Acesso a internet',
    status() {
        console.log('Ativo')
    }
}

console.log(assinatura.descricao)
// Quando atribuímos um objeto a uma variável nos não duplicamos o objeto, por ser um objeto literal nos apenas damos uma nova refêrencia a ele, sendo capaz de chamar e de executar pela variável atribuída
let y = assinatura
console.log(y.descricao)
// Observe que modificaremos o valor contido na variável y e o msm será modificado para o objeto assiantura em si.
y.descricao = 'Internet + tv + telefone'
console.log(assinatura.descricao)
console.log(y.descricao)
