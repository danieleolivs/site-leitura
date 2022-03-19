let suspiria = {
    nome:"suspiria",
    imagem:"../assets/filmes/suspiria.svg",
    descrição:"Pequenas observações sobre a obra Suspiria, de Dario Argento, feito em 1977."
}

let filmes = [suspiria]

let newDiv = document.getElementsByClassName('imagens')

function exibeFilmes(filmes){
    for(let i=0; i <filmes.length; i++){
        let newId = document.createElement('div')
        newDiv.setAttribute('id',`${filmes[i].nome}`)
        newDiv.innerHTML += `<img src="${imagem}"`
        newDiv.innerHTML += `<h3>${filmes[i].nome}</h3>`
        newDiv.innerHTML += `<h4>${filmes[i].descricao}</h4>`
    }
}

