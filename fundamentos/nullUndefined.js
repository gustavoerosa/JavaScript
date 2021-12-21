let valor // não inicializada, o JS utiliza quando acha necessario
console.log(valor)

valor = null // ausencia de valor, utilizar sempre null quando precisar zerar uma variavel
console.log(valor)
// console.log(valor.toString()) // Erro!!!

const prod = {}
console.log(prod.preco)
console.log(prod)

prod.preco = 3.50
console.log(prod)

prod.preco = undefined // Não utilizar desta forma!!!
console.log(!!prod.preco)
// delete prod.preco
console.log(prod)

prod.preco = null // Sem preço!!!
console.log(!!prod.preco)
console.log(prod)