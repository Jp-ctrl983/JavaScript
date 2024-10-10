function fatorial(x){
    let fat = 1;
    //5! = 5 * 4 * 3 * 2 * 1=120
    for (let c = x; c > 1; c--){
        fat*= c
    }
    return fat;
}

let res = fatorial(5);
console.log('O valor do fatorial e de ' + res)