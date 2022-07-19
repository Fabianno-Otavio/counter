function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    res.innerHTML=''
    if(passo.value == 0){
        res.innerHTML='Digite o passo.'
    } else if(inicio.value == '' || fim.value == ''){
        res.innerHTML='Impossível contar. Digite algum valor.'
    } else {
    if(inicio.value>fim.value){
        for(var i = Number(inicio.value);i>=Number(fim.value);i-=Number(passo.value)){
        res.innerHTML+= ` ${i} \u{1F449}`
        }
    } else {
    for(var i = Number(inicio.value);i<=Number(fim.value);i+=Number(passo.value)){
        res.innerHTML+= ` ${i} \u{1F449}`
    }
    }
    res.innerHTML+= ` \u{1F3C1}`
    }
}