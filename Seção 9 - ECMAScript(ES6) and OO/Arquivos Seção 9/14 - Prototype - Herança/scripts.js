// Prototype - Herança
/*
Entendendo como funciona herança de por baixo dos panos :
Em todo objeto é presente uma tag __proto__ a mesma é responsável pela herança,
observe abaixo que quando atribuimos  a tag __proto__ e dizemos que ela vem de um determinado objeto
todos os métodos e atributos do objeto dito são passados para o que foi informado, como acontece com
verterbrado e ave:
*/
let animal = {attr1: 'a'}
let vertebrado = {attr2: 'b'}
let ave = {__proto__: vertebrado, attr3: 'c'} // proto de vertebrado incluído em ave

console.log(`Objeto ave herdando de vertebrado: ${ave.attr2}`) 
console.log(`Tentando chamar atributo de animal em ave, sem o proto: ${ave.attr1}`)

/* 
Como todos os objetos criados herdam de prototype, podemos criar uma tributo ou método que será presente
em todos os objetos criados por essa aplicação, colocando ele em prototype, Observe:
 */
Object.prototype.attr50 = 'Z'
// Observe que nem em animal, vertebrado ou ave, possui o attr50, mas como ele foi atribuido a prototype, todos os objetos o possui
console.log(`Valor attr50 em animal: ${animal.attr50}`)
console.log(`Valor attr50 em vertebrado: ${vertebrado.attr50 }`)
console.log(`Valor attr50 em ave: ${ave.attr50}`)

// CUIDADO COM ESSE TIPO DE IMPLEMENTAÇÃO POIS TODOS OS OBJETOS TERAM ESSE ATRIBUTO OU MÉTODO


