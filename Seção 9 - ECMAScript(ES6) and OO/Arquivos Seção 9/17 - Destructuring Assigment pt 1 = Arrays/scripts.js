// Destructuring

let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']

//let [a, b, , c] = frutas // Para pular um índice basta deixa um espaço em branco

let [a, b = 'Abacate', c, d, e = 'Banana'] = frutas // Colocando um valor default, que será preenchido caso receba undefined
console.log(a, b, c, d, e)

let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['José', 'Maria']]
/* Usando Destructuring em arrays multidimensionais abrimos a variável [] , pulamos o primeiro índice que no caso seria o primeiro vetor[,], abrimos o colchete para percorrer sobre os valores do array novamente[,[]] e por fim apra pegar o valor maria pulaomos o primeiro o índice o jose[,[,]] e passamos uma variável para receber o segundo índice no caso maria [,[,n2]] */
let [, [, n2]] = coisas 
console.log(n2)
let [[, , fruta]] = coisas
console.log(fruta)
