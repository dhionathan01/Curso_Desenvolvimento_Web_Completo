// Objetos literais - Criação dinâmica de pares nome/valor

let pessoa = {
    nome: 'Maria',
    idade: 25
}

console.log(pessoa)

//-----------------------------------------------

// Criando outro atributo e definindo valor:
// Atributo = sexo / valor = Feminino
pessoa.sexo = 'Feminino'
// Atribuindo uma função (método) dentro do objeto:
pessoa.dizerOi = () => console.log('Olá, tudo bem ?')
// Chamando função
pessoa.dizerOi()