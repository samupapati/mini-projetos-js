let buttons = document.getElementsByClassName('button');
let modal = document.getElementById('modal')
let fecharModal = document.getElementById('fecharModal')

let buttonForma2 = document.getElementById('buttonForma2')
let fecharModalForma2 = document.getElementById('fecharModalForma2')

let form = document.getElementById('form')

let modal2 = document.getElementById('modal2')
let buttonModal12 = document.getElementById('buttonModal2')

modal.style.display = 'none'
modal2.style.display = 'none' 
Array.from(buttons).forEach((botao) => {
    botao.addEventListener('click', mostraModal)
})

function mostraModal(e){
    e.preventDefault()
    if(modal.style.display === 'none'){
        modal.style.display = 'flex'
    } else{
        modal.style.display = 'none'
    }
}

fecharModal.addEventListener('click', mostraModal)

/* == */

buttonForma2.addEventListener('click', mostraModalForma2)
fecharModalForma2.addEventListener('click', mostraModalForma2)

function mostraModalForma2(){
    modal.classList.toggle('modalOnOff')
}

form.addEventListener('submit', mostraModal)
form.addEventListener('submit', agradece)
buttonModal12.addEventListener('click', agradece)

function agradece(e){
    e.preventDefault()
    if(modal2.style.display === 'none'){
        modal2.style.display = 'flex'
    } else{
        modal2.style.display = 'none'
    }
}