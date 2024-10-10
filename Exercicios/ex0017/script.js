function tabua(){
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('[ERRO SEM DADOS]')
    }else{
        let n = Number(num.value)
        let c = 1
        //antes de mostrar a tabuada não e adiciondo nada 
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            //para não avr problemas com value adicionaremos 
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}