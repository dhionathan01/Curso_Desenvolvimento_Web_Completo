//contexto rest

// Neste exemplo com o auxílio do operador rest e spread estamos enviando de de forma dinâmica um série de valores que será introduzido em um array e colocado dentro da variável param.
function soma(...param) {
    let resultado = 0
    console.log(param)

    param.forEach(v => resultado += v) // Para cada valor contido em param, atribua a variável v e incremente o resultado

    return resultado
}

// Na seguinte função iremos definir um múltiplicador, que será passado para m, logo será o primeiro valor inserido na funçãoe em seguida uma quantidade indeterminada de valores, que serão indivualmente multiplicados
function multiplicacao(multiplicacador, ...parametros_inseridos) {
    let resultado = 0
    
    console.log(multiplicacador)
    console.log(parametros_inseridos)

    parametros_inseridos.forEach(valor_contido_em_cada_indice => resultado += multiplicacador * valor_contido_em_cada_indice)

    return resultado
}

console.log(soma(3, 8, 5, 7))

// Estamos falando a seguir que '5' o primeiro paramâmetro inserido na função, que será atribuido a 'm', se tornando o multiplicador de todos os outros elementos seguintes inseridos '7,12,3...' que com o aúxilio do operador rest serão unificados como array a 'p'.
console.log(multiplicacao(5, 7, 12, 3, 49))
