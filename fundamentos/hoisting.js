console.log("a:", a) // não é interessante utilizar o hoisting, sempre inicialize as variaveis antes!!!
var a = 2
console.log("a:", a)

function teste() {
    console.log("a:", a)
    var a = 2
    console.log("a:", a)
}

teste()

// console.log("b:", b) com let o hoisting não funciona...
let b = 1
console.log("b:", b)