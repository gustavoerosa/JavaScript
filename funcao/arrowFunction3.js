let comparaComThis = function (param) {
    console.log(this === param)
} 

comparaComThis(this)
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

console.log()

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

console.log()

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // arrow function mais forte que bind
comparaComThisArrow(module.exports) // module = this