// par nome/valor
const saudacao = "Opa" // contexto lexico 1

function exec () {
    const saudacao = "Falaaa" // contexto lexico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: "Gustavo",
    peso: 74,
    idade: 27,
    endereco: {
        logradouro: "Rua Mariano Gardolisnki",
        numero: 270
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)