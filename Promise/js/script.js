// Criação de promessa 

const myPromise = new Promise((resolve, reject)=> { 
    const nome = "João"

    if(nome == "Matheus") { 
        resolve('Usuario Matheus encontrado!')
    } else { 
        reject("Não foi encontrado esse nome.")
    }
})

// Data é a reposta do resolve e do reject.
// Só executa a promessa quando encandeia o método then nela.
myPromise.then((data) => { 
    console.log(data)
})



// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject)=> { 
    const nome = "João"

    if(nome == "Matheus") { 
        resolve('Usuario Matheus encontrado!')
    } else { 
        reject("Não foi encontrado esse nome.")
    }
})


myPromise2.then((data) => { 
    return data.toLowerCase() //Primeiro data para passar string modificada.
                              //Aqui estou manipulando o dado antes de passar pra outro then (caso eu queira)
}).then((stringModificada)=> { 
    console.log(stringModificada) //Agora eu exibo esse dado modificado.
})

// Tratando o Reject. Retorno do catch.




const myPromise3 = new Promise((resolve, reject)=> { 
    const nome = "João"

    if(nome == "Matheus") { 
        resolve('Usuario Matheus encontrado!')
    } else { 
        reject("Não foi encontrado esse nome.")
    }
})

// Data é a reposta do resolve e do reject.
// Só executa a promessa quando encandeia o método then nela.
myPromise3.then((data) => { 
    console.log(data)
}).catch((err)=> { 
    console.log('Aconteceu um erro: ' + err)
})

// Resolver várias promessas com all
const p1 = new Promise((resolve, reject) => { 
    console.log("P1 ok!")
})

const p2 = new Promise((resolve, reject) => { 
    console.log("P1 ok!")
})

const p3 = new Promise((resolve, reject) => { 
    console.log("P1 ok!")
})


const resolveAll = Promise.all([p1, p2, p3]).then((data) => { 
    console.log(data)
})

//  Várias promessas com race. Seria uma corrida de quem executar primeiro
const p4 = new Promise((resolve, reject) => { 
    setTimeout(()=> {
        resolve('P4 ok! Timeout')
    }, 2000)
    console.log("P1 ok!")
})

const p5 = new Promise((resolve, reject) => { 
    console.log("P1 ok!")
})

const p6 = new Promise((resolve, reject) => { 
    console.log("P1 ok!")
})
