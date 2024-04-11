function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var sal = document.getElementById('salto')
    var resultado = document.getElementById('res')
    resultado.innerHTML = 'Contando:'
    var i = Number(ini.value)
    var f = Number(fim.value)
    var s = Number(sal.value)
    if(sal<=0){
        alert('Passo inválido. Vou considerar salto de 1')
        s = 1
    }
    if(i<f){//crescendo
        for(var c = i; c <= f; c += s){
            resultado.innerHTML += `${c} \u{1F449} `
        }
    }
    else{//decrescendo
        for(var c = i; c >= f; c -= s){
            resultado.innerHTML += `${c} \u{1F449} `
        }
    }
    resultado.innerHTML += `\u{1F3C1}`
}
