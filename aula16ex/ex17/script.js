let numero = document.querySelector('input#num')
let tab = document.getElementById('numeros')
let res = document.getElementById('res')
let lista = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value,lista)){
        numero
        lista.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Adicionado número ${numero.value}`
        tab.appendChild(item)
        res.innerHTML = ''
    }else{
        alert("Numero invalido ou já presente na lista")
    }
    numero.value = ''
    numero.focus()
}
function processar(){
    lista.sort()
    let tot = lista.length
    let maior = lista[0]
    let menor = lista[0]
    let soma = 0
    let media = 0
    for(let pos in lista){
        soma += lista[pos]
        if(lista[pos] >maior){
            maior = lista[pos]
        }
        if(lista[pos] < menor){
            menor = lista[pos]
        }
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo foram ${tot} numeros</p>`
    res.innerHTML += `<p>O maior numero foi ${maior}</p>`
    res.innerHTML += `<p>O menor numero foi ${menor}</p>`
    res.innerHTML += `<p>A soma de todos os valores foi ${soma}</p>`
    res.innerHTML += `<p>A média entre eles foi ${media}</p>`
    
}