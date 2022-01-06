// Coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto['marca do produto']
console.log(produto)

console.log()

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Gustavo',
        idade: '28',
        enredeco: {
            logradouro: 'Mariano',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Guga',
        idade: 28
    }, {
        nome: 'Jessica',
        idade: 29
    }],
    calcularValorSeguro: function() {
        //....
    }
}

carro.proprietario.enredeco.numero = 1000
carro['proprietario']['enredeco']['logradouro'] = 'Mariano Gar'
console.log(carro)

delete carro.condutores
delete carro.proprietario.enredeco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length)