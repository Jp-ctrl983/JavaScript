var amigo = {nome:'João', idade:14,peso:60,engordar(p=0, i=0){
    //para almentar o peso
    console.log('Engordou')
    this.peso += p
}}
//definição do peso
amigo.engordar(2)
//para mostrar uma so identificação 
console.log(`O seu nome e ${amigo.nome} vc tem ${amigo.idade} anos e seu peso ${amigo.peso}Kg.`)