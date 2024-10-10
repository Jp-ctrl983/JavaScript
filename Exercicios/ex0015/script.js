function verificar() {
    //data atual
    var data = new Date()
    //data do ano atual
    var ano = data.getFullYear()
    //estamos identificando o id do html
    var fano = window.document.getElementById('txtano')
    //qui identificamos onde ira apareser o resultado
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("verifique e tente  novamante")
    }else{
    var fsex = window.document.getElementsByName('radex')
    var idade = ano - Number(fano.value)
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gen = 'Homem'
            if (idade >= 0 && idade < 10){
                gen = 'Criança'
                img.setAttribute('src', 'bebe.jpg')
            }else if (idade < 21){
                gen = 'Jovem'
                img.setAttribute('src', 'jovemmasc.jpg')
            }else if (idade < 50){
                gen = 'Adulto'
                img.setAttribute('scr', 'adultomasc.jpg')
            }else{
                gen = 'Idoso'
                img.setAttribute('src', 'idoso.jpg')
            }
        }else if (fsex[1].checked){
            gen = 'Mulher'
            if (idade >= 0 && idade < 10){
                gen = 'Criança'
                img.setAttribute('src', 'bebefem.jpg')
            }else if (idade < 21){
                gen = 'Adolecente'
                img.setAttribute('src', 'jovem.jpg')
            }else if (idade < 50){
                gen = 'Adulta'
                img.setAttribute('src', 'adulta.jpg')
            }else{
                gen = 'Idoso'
                img.setAttribute('src', 'idosafem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} ${idade}anos!`
        //e para adicionar um elemento
        res.appendChild(img)
    }
}