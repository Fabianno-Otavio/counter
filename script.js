function contar(){
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    var res = document.getElementById('res')
    res.innerHTML=''
    if(step.value <= 0){
        res.innerHTML='Invalid step.'
    } else if(start.value == '' || end.value == ''){
        res.innerHTML='Impossible to count.'
    } else {
    if(start.value>end.value){
        for(var i = Number(start.value);i>=Number(end.value);i-=Number(step.value)){
        res.innerHTML+= ` ${i} \u{1F449}`
        }
    } else {
    for(var i = Number(start.value);i<=Number(end.value);i+=Number(step.value)){
        res.innerHTML+= ` ${i} \u{1F449}`
    }
    }
    res.innerHTML+= ` \u{1F3C1}`
    }
}