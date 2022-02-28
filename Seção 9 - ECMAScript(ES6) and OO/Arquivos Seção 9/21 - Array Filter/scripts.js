let funcionarios =
    [{ nome: 'Fernanda', cargo: 'Analista de RH', salario: 1300, status: 'ativo' },
        { nome: 'Miguel', cargo: 'Assistente adm', salario: 1700, status: 'ativo' },
        { nome: 'Rosa', cargo: 'Auxiliar de Contabilidade', salario: 1600, status: 'Inativo' },
        { nome: 'Roberto', cargo: 'Programador PHP', salario: 4500, status: 'ativo' },
        { nome: 'Maria', cargo: 'Engenhaira Mecânica', salario: 7500, status: 'ativo' }]
console.log(funcionarios)

console.log(funcionarios.filter(function (funcionario) {
    return f.salario > 2000 // retorne os somente quem o salario for maior que 2000
}))

// Retorna os funcionarios que recebem mais de 2000 e estão com status ativo
console.log(funcionarios.filter(function (funcioanrio) {
    return f.salario > 2000
})).filter(function(funcionario) {
    return f.status == 'ativo'
})

//Refatorando
console.log(funcionarios.filter(funcionario => funcionario.valor > 2000).filter(funcionario => funcionario.status == 'ativo'))