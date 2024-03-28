function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var boa = window.document.getElementById('Boa')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#FEFFF8'
        boa.innerHTML ='Bom Dia!'
        boa.style.color = '#AC5E31'
        msg.style.color = '#AC5E31'
    }else if(hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background ='#DD7D39'
        boa.innerHTML ='Boa Tarde!'
        boa.style.color = '#DD7D39'
        msg.style.color = '#DD7D39'
    }else {
        img.src = 'fotonoite.png'
        document.body.style.background ='#102E51'
        boa.innerHTML ='Boa Noite!'
        boa.style.color = '#102E51'
        msg.style.color = '#102E51'
    }
}