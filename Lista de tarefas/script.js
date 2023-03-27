let inputNomeTarefa = document.getElementById('inputNomeTarefa')
let buttonAddTarefa = document.getElementById('buttonAddTarefa')
let tarefasContainer = document.getElementById('tarefas-container')
let tarefasContainerClass = document.getElementsByClassName('tarefas-container')
let janelaEditarTarefa = document.getElementById('janelaEditarTarefa')
let buttonAddTarefaEditar = document.getElementById('buttonAddTarefaEditar')


function geraID() {
    return Math.floor(Math.random() * 3000)
}

inputNomeTarefa.addEventListener('change', (e) => {
    let valorInputNomeTarefa = e.target.value
    criaTarefa(valorInputNomeTarefa)

    inputNomeTarefa.value = ''
})

function criaTarefa(valorInput) {
    let tarefa = { nome: valorInput, id: geraID() }
    inserirTarefa(tarefa)
}

function inserirTarefa(tarefa) {
    let tarefaDiv = document.createElement('div')
    tarefaDiv.classList.add('tarefaDiv')
    tarefaDiv.id = `${tarefa.id}`
    tarefasContainer.appendChild(tarefaDiv)

    let nomeTarefa = document.createElement('span')
    nomeTarefa.classList.add('nomeTarefa')
    nomeTarefa.id = `${tarefa.id}#`
    nomeTarefa.innerHTML = `${tarefa.nome}`
    tarefaDiv.appendChild(nomeTarefa)

    let div = document.createElement('div')
    tarefaDiv.appendChild(div)

    let buttonEditarTarefa = document.createElement('ion-icon')
    buttonEditarTarefa.name = 'settings'
    buttonEditarTarefa.id = `#${tarefa.id}`
    buttonEditarTarefa.className = 'btnTarefa'
    buttonEditarTarefa.innerHTML = 'Editar'
    div.appendChild(buttonEditarTarefa)
    buttonEditarTarefa.addEventListener('click', (e) => {
        let idTarefa = e.target.id
        editarTarefa(idTarefa)
    })

    let buttonExcluirTarefa = document.createElement('ion-icon')
    buttonExcluirTarefa.name = 'trash'
    buttonExcluirTarefa.id = `#${tarefa.id}`
    buttonExcluirTarefa.className = 'btnTarefa'
    buttonExcluirTarefa.innerHTML = 'Excluir'
    div.appendChild(buttonExcluirTarefa)
    buttonExcluirTarefa.addEventListener('click', () => { excluirTarefa(tarefa) })
}

function editarTarefa(idTarefa) {
    janelaEditarTarefa.classList.toggle('mostrarJanela')

    let inputNomeTarefaEditar = document.getElementById('inputNomeTarefaEditar')

    inputNomeTarefaEditar.addEventListener('change', (e) => {
        valorInputNomeTarefaEditar = e.target.value
    })

    buttonAddTarefaEditar.addEventListener('click', () => {
        trocaNomeTarefa(valorInputNomeTarefaEditar)
    })

    function trocaNomeTarefa(valorInputNomeTarefaEditar) {

        let itemEditar = document.getElementById(idTarefa.replace(/^./, '') + '#')
        if (itemEditar.id === idTarefa.replace(/^./, '') + '#') {
            itemEditar.innerHTML = valorInputNomeTarefaEditar
        }

        inputNomeTarefaEditar.value = ''
        idTarefa = ''
    
        janelaEditarTarefa.classList.toggle('mostrarJanela')
    }
}
let fecharJanela = document.getElementById('fecharJanela')
fecharJanela.addEventListener('click', () => {

    janelaEditarTarefa.classList.toggle('mostrarJanela')
    inputNomeTarefaEditar.value = ''

})


function excluirTarefa(tarefa) {
    let itemExcluir = document.getElementById(`${tarefa.id}`)
    itemExcluir.remove()
}