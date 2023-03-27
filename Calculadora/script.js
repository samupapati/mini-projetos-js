let input = document.getElementById('input');

let sete = document.getElementById('sete');
let oito = document.getElementById('oito');
let nove = document.getElementById('nove');
let somar = document.getElementById('somar');

let quatro = document.getElementById('quatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let subtrair = document.getElementById('subtrair');

let um = document.getElementById('um');
let dois = document.getElementById('dois');
let tres = document.getElementById('tres');
let mult = document.getElementById('mult');

let zero = document.getElementById('zero');
let dividir = document.getElementById('dividir');

let ponto = document.getElementById('ponto');
let apaga = document.getElementById('apaga');
let resultado = document.getElementById('resultado');

let numero = document.getElementsByClassName('numeros')

let valorGuardado = 0
let novoValor = 0 

let soma = false
let sub = false
let multiplica = false
let divide = false


Array.from(numero).forEach(i => {
    i.addEventListener('click', () => {
        if(input.value === '0'){
            input.value = null
        }
        input.value += i.textContent
    })
});

ponto.addEventListener('click', (e) => {
    if(input.value.includes('.')){
        return
    } else{
        input.value += e.target.value
    }
})

apaga.addEventListener('click', () => {
    input.value = 0;
    valorGuardado = 0;
})

somar.addEventListener('click', () => {
    valorGuardado = Number(valorGuardado) + Number(input.value)
    input.value = 0
    soma = true
})


subtrair.addEventListener('click', () => {
    if(valorGuardado === 0){
        valorGuardado = Number(valorGuardado) + Number(input.value)
    } else{
        valorGuardado = (Number(valorGuardado) - Number(input.value))
    }
    input.value = 0
    sub = true
})

mult.addEventListener('click', () => {
    if(valorGuardado === 0){
        valorGuardado = Number(valorGuardado) + Number(input.value)
    } else{
        valorGuardado = (Number(valorGuardado) * Number(input.value))
    }
    input.value = 0
    multiplica = true
})

dividir.addEventListener('click', () => {
    if(valorGuardado === 0){
        valorGuardado = Number(valorGuardado) + Number(input.value)
    } else{
        valorGuardado = (Number(valorGuardado) / Number(input.value))
    }
    input.value = 0
    divide = true
})

resultado.addEventListener('click', () => {
    if(soma === true){
        input.value = Number(valorGuardado) + Number(input.value)
        valorGuardado = 0
        soma = false
    } else if(sub === true){
        input.value = Number(valorGuardado) - Number(input.value)
        valorGuardado = 0
        sub = false
    } else if(multiplica === true){
        input.value = Number(valorGuardado) * Number(input.value)
        valorGuardado = 0
        sub = false
    } else if(divide === true){
        input.value = Number(valorGuardado) / Number(input.value)
        valorGuardado = 0
        divide = false
    }
})