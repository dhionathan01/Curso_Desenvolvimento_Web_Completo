let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: { // Exemplo de composição tem um, é quando um atributo de um objeto é outro objeto
        fabricante: 'abc',
        modelo: 'xyz'
    }
}

/* 
O token do Destructuring ele varia de acordo com o que estamos trabalhando:
arrays => []
Object => {} 
*/
//let { descricao, preco } = produto // Destruturando valores com objetos
// Para dar um nome diferente as variáveis quando pegamos  a informação de um objeto para que o nome da variável seja diferente do atributo
//let { descricao : d, preco: p } = produto

let {descricao: d, preco: p, desconto = 5} = produto // Podemos criar valore e variáveis default como nos arrays
console.log(d, p, desconto)

 /* 
 Atuando sobre um objeto que está dentro de um objeto
 Passamos o objeto em questão {detalhes:}  e dentro dele abrimos chaves e escolhemos os atributos {detalhes: {fabricante, modelo}}
 */
let { detalhes: { fabricante: f, modelo: m } } = produto // Atuando sobre um objeto que está dentro de um objeto
console.log(f, m)