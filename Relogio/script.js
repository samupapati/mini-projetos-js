let horaH1 = document.getElementById('hora')
let minutosH1 = document.getElementById('minutos')
let segundosH1 = document.getElementById('segundos')

const zeroFill = n => {
    return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
    let date = new Date();
    let hora = zeroFill(date.getHours());
    let minutos = zeroFill(date.getMinutes());
    let segundos = zeroFill(date.getSeconds())

    horaH1.innerHTML = hora
    minutosH1.innerHTML = minutos
    segundosH1.innerHTML = segundos
}, 1000)



