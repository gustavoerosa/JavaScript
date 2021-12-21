function teste1(num) {
    if(num > 7)
        console.log(num) 
        console.log("Final") 
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // Cuidado com o ; finaliza o if e o console esta simplismente em um bloco sem fazer parte do if
        console.log(num)
    }
}

teste2(6)
teste2(8)