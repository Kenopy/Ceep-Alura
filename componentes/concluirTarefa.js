const BotaoConcluir = () =>{
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Concluir'

    botaoConclui.addEventListener('click', ConcluirTarefa)

    return botaoConclui;
}

const ConcluirTarefa = (e) => {
    const botaoConclui = e.target
    
    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
    
    console.log(tarefaCompleta.value, " valor toggle")
}

export default BotaoConcluir