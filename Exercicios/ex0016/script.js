function calc() {
//*Essas são as variaveis de identificação do id do formulario*/
    let ini = window.document.getElementById('txt1')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '[FALTOU DADOS!!]'
        //window.alert('[ERRO] FALTOU DADOS, TENTE NOVAMENTE')
    }else{
        res.innerHTML = 'Contando: <br>'
        //pegar o valor que esta dentro de ini e converter!
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
         if(p > f){
            res.innerHTML = `<p>Você colocou o passo maior que o fim então o passo vai ser considerado 1</p>`
           p = 1
        }
        if(p <= 0){
            window.alert('Coloque um número > 0 no [Passo] Agora o passo vale 1')
            p = 1
        }       
        if (i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}` 
        }  
        res.innerHTML += `\u{1F3C1}`
        }else{
            //contegem decresente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
           res.innerHTML += `\u{1F3C1}`
        }
    }
}