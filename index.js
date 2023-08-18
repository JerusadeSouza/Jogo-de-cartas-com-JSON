document.getElementById('tirar-carta').addEventListener('click', ()=>{
    tirarUmaCartaAleatoriaDoBaralho()
})

async function criarBaralhoEmbraralhado(){
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
}


async function tirarUmaCarta(deck_id){
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCartaAleatoriaDoBaralho(){
    const baralho = await criarBaralhoEmbraralhado()
    const carta = await tirarUmaCarta(baralho.deck_id)
    const imagenCarta = carta.cards[0].image
    document.getElementById('carta').src = imagenCarta
}

tirarUmaCartaAleatoriaDoBaralho()
console.log('segue o fluxo sem esperar')