//Aqui criei uma variável e busquei lá no html
let botao = document.getElementById("botton")
let select = document.getElementById("select-moedas")



// Essa função é responsável por converter as moedas com valores atualizados
async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL"). then( function(resposta){
     return resposta.json()

    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    console.log(dolar)
    console.log(euro)


    let inputValorEmReias = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dólar Americano") {
        let valorEmDolares = inputValorEmReias / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }

    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReias / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
    }


    textoReal.innerHTML = inputValorEmReias.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

}

// Essa função é responsavel pela troca de bandeiras e o nome das moedas
function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")



    if (select.value === "US$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/Estados Unidos.png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/Euro.png"

    }

    converterMoedas ()

}



botao.addEventListener("click", converterMoedas) // Essa função é o que está ouvindo o clique do botão
select.addEventListener("change", trocaDeMoeda) // Esssa função está ouvindo a troca da seleção de moeda




