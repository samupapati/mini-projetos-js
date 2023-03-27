let hora = document.getElementById('hora') ;
let minuto = document.getElementById('minuto') ;
let segundo = document.getElementById('segundo');
let milesimo = document.getElementById('milesimo');

let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');

let h = 0;
let m = 0;
let s = 0;
let ml = 0;

let cronometro;

start.addEventListener('click', startCron);
function startCron(){
    cronometro = setInterval(() => {
        ml++;
        milesimo.innerHTML = `${ml < 10 ? '0'+ml : ml}`;        
        segundo.innerHTML = `${s < 10 ? '0'+s : s}`;
        minuto.innerHTML = `${m < 10 ? '0'+m : m}`;
        hora.innerHTML = `${h < 10 ? '0'+h : h}`;

        if(milesimo.textContent == 99){
            ml = 0;
            s++;
        }
        if(segundo.textContent == 60){
            s = 0;
            m++;
        }
        if(minuto.textContent == 60){
            m = 0;
            h++;
        }
    }, 10)
}

pause.addEventListener('click', pauseCron);
function pauseCron(){
    clearInterval(cronometro);
}

reset.addEventListener('click', resetCron);
function resetCron(){
    h = 0;
    hora.innerHTML = `0${h}`;
    m = 0;
    minuto.innerHTML = `0${m}`;
    s = 0;
    segundo.innerHTML = `0${s}`;
    ml = 0;
    milesimo.innerHTML = `0${ml}`;        
}

let buttonOn = document.getElementById('buttonOn')
let buttonOff = document.getElementById('buttonOff')
let cron = document.getElementsByClassName('cron')
buttons = document.getElementsByClassName('button')

buttonOn.style.display = 'block';
buttonOff.style.display = 'none';

buttonOn.addEventListener('click', () => {
    buttonOff.style.display = 'block';
    buttonOn.style.display = 'none';
    document.body.classList.toggle('noturno');
    Array.from(cron).forEach(element => {
        element.classList.toggle('noturno')
    });
    Array.from(buttons).forEach(element => {
        element.classList.toggle('noturno')
    });
})

buttonOff.addEventListener('click', () => {
    buttonOn.style.display = 'block';
    buttonOff.style.display = 'none';
    document.body.classList.toggle('noturno');
    Array.from(cron).forEach(element => {
        element.classList.toggle('noturno')
    });
    Array.from(buttons).forEach(element => {
        element.classList.toggle('noturno')
    });
})