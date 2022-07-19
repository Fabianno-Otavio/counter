function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    res.innerHTML=''
    for(var i = Number(inicio.value);i<=fim.value;i+=Number(passo.value)){
        res.innerHTML+= `${i} `
        console.log(i)
    }
}