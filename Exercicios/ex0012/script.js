function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //manhã
        imagem.src = 'img/Img da manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //Tarde
        imagem.src = 'img/Img da tarde.jpg'
        document.body.style.background = '#b3846f'
    }else{
        //Noite
        imagem.src = 'img/img da noite.jpg'
        document.body.style.background = '#515154'
    }
}
