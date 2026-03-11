import BotaoConcluir from "./componentes/concluirTarefa"
import BotaoDeletar from "./componentes/deletarTarefa"

function adicionarTarefa (e){
    e.preventDefault()
    const input = document.querySelector('[data-form-input]')

    const lista = document.querySelector("[data-list]")
    const valorInput = input.value

    const novaTarefa = document.createElement('li')
    novaTarefa.classList.add('task')
    const novoParagrafo = `<p class="content">${valorInput}</p>`

    novaTarefa.innerHTML = novoParagrafo
    novaTarefa.appendChild(BotaoConcluir())
    novaTarefa.appendChild(BotaoDeletar())
    lista.appendChild(novaTarefa)
    input.value = ""
}

const addNovaTarefa = document.querySelector('[data-form-button]')

addNovaTarefa.addEventListener('click', adicionarTarefa);
