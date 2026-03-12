const contador = document.querySelector("#contador")
let p = document.querySelector("#mensagem")
let pa = document.querySelector("#a")
let paa = document.querySelector("#total")

function clicar() {

    let dados = JSON.parse(localStorage.getItem("Clique")) || 0
    let maximo = JSON.parse(localStorage.getItem("Recorde")) || 0
    let total = JSON.parse(localStorage.getItem("Total")) || 0
    
    total++
    dados++

    if (dados > maximo) {
        maximo = dados
        localStorage.setItem("Recorde", JSON.stringify(maximo))
    }

    localStorage.setItem("Clique", JSON.stringify(dados))
    localStorage.setItem("Total", JSON.stringify(total))

    contador.textContent = "Cliques: " + dados
    pa.textContent = `Record de cliques: ${maximo}`
    paa.textContent = `Total de vezes que já foi apertado: ${total}`

    if (dados >= 10){
        p.textContent = `Você já clicou muitas vezes: ${dados}`
    }
}

function resetar(){
    localStorage.setItem("Clique", 0)
    contador.textContent = "Cliques: 0"
}

let dados = JSON.parse(localStorage.getItem("Clique")) || 0
let maximo = JSON.parse(localStorage.getItem("Recorde")) || 0
let total = JSON.parse(localStorage.getItem("Total")) || 0

contador.textContent = "Cliques: " + dados
pa.textContent = `Record de cliques: ${maximo}`
paa.textContent = `Total de vezes que já foi apertado: ${total}`