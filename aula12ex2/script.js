function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var resultado = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO,verifique se seu ano está correto')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade < 13){
                //criança menino
                img.setAttribute('src','https://images.pexels.com/photos/18472915/pexels-photo-18472915/free-photo-of-oculos-escuros-oculos-de-sol-sentado-modelo.jpeg?auto=compress&cs=tinysrgb&w=400')
            }
            else if (idade >=13 && idade <25){
                //Jovem moço
                img.setAttribute('src','https://images.pexels.com/photos/18185492/pexels-photo-18185492/free-photo-of-homem-rua-via-jaqueta.jpeg?auto=compress&cs=tinysrgb&w=400')
            }
            else if (idade >=25 && idade <60){
                //Adulto homem
                img.setAttribute('src','https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=400')
            }else{
                //velho homem
                img.setAttribute('src','https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400')
            }
        }else{
            gen = 'Mulher'
            if(idade >= 0 && idade < 13){
                //Criança menina
                img.setAttribute('src','https://images.pexels.com/photos/18509188/pexels-photo-18509188/free-photo-of-menina-garota-moca-fofo.jpeg?auto=compress&cs=tinysrgb&w=600')
            }
            else if (idade >=13 && idade <25){
                //Jovem moça
                img.setAttribute('src','https://images.pexels.com/photos/20877212/pexels-photo-20877212/free-photo-of-fotografo-perspectiv-photos.jpeg?auto=compress&cs=tinysrgb&w=400')
            }
            else if (idade >=25 && idade <60){
                //Adulto mulher
                img.setAttribute('src','https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400')
            }else{
                //velha mulher
                img.setAttribute('src','https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=400')
            }
        }
        resultado.innerHTML = `Você é ${gen} e tem ${idade} anos`
        resultado.appendChild(img)
    }
}