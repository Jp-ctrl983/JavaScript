var num = window.document.getElementById('fnum')
var lista = window.document.getElementById('flist')
var res = window.document.getElementById('res')
let valores = []

function islista(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inlist(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function add(){
    if (islista(num.value) && !inlist(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
//*/Quando ele conseguir adicionar um valor o res.innerHTML vai ser limpado*/
        res.innerHTML = ``
    }else {
        window.alert('[ERRO] valor invalido o ja na lista')
    }
    //para apagar 
    num.value = ""
    num.focus()

}

function fim(){
    if(valores.length == 0){
        window.alert('[ERRO] digite valores!')
    }else{
        let tot = valores.length
        //o maior valor começa no zero e menor também 
        let maior = valores[0]
        let menor =  valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            //para somar todos os valores 
            soma += valores[pos]
            //o if pode ser sem {}
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>O total de  ${tot} valores cadastrados.</p>` 
        res.innerHTML += `<p>O maior valor e de ${maior}</p>` 
        res.innerHTML += `<p>O menor valor e de ${menor}</p>` 
        res.innerHTML += `<p>A soma do menor e so maior e de <strong>${menor+maior}</strong></p>` 
        res.innerHTML += `<p>A soma de todos os valores e de <strong>${soma}</strong></p>` 
        res.innerHTML += `<p>A media e de  <strong>${media}</strong></p>` 
         
    }
}//-----------------------